import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/sign-up/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In!!!</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
