import { useState, useContext } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import { UserContext } from "../../context/user.context";

const defautFormFields = {
  email: "",
  password: "",
};

const SigninForm = () => {
  const [formFields, setFormFields] = useState(defautFormFields);

  const { email, password } = formFields;
  const { setCurrentUSer } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defautFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);

      setCurrentUSer(user);
      resetFormFields();
    } catch (e) {
      switch (e.code) {
        case "auth/wrong-password":
          alert("Incorrect Password or E-Mail");
          break;
        case "auth/invalid-login-credentials":
          alert("Incorrect Password or E-Mail");
          break;
        case "auth/user-not-found":
          alert("This user doesn't exist");
          break;
        default:
          alert("Unknown error");
          console.log(e);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>You already have an account?</h2>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" required name="email" value={email} onChange={handleChange} label={"Email"} />
        <FormInput type="password" required name="password" value={password} onChange={handleChange} label={"Password"} />

        <div className="buttons-container">
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
