import SignupForm from "../../components/sign-up/sign-up-form.component";
import SigninForm from "../../components/sign-in-form/sign-in-form.component";
import "./auth.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;
