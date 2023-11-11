import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const defautFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defautFormFields);

  const { setCurrentUSer } = useContext(UserContext);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defautFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      setCurrentUSer(user);
      resetFormFields();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Email already in use.");
      } else {
        console.log("ERROR creating user:", e);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput type="text" required name="displayName" value={displayName} onChange={handleChange} label={"Display Name"} />
        <FormInput type="email" required name="email" value={email} onChange={handleChange} label={"Email"} />
        <FormInput type="password" required name="password" value={password} onChange={handleChange} label={"Password"} />
        <FormInput type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange} label={"Confirm Passwordord"} />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
