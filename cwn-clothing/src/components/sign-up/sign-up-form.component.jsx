import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defautFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defautFormFields);

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
    <div>
      <h1>Sign Up with your Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" required name="displayName" value={displayName} onChange={handleChange} />
        <label>Email</label>
        <input type="email" required name="email" value={email} onChange={handleChange} />
        <label>Password</label>
        <input type="password" required name="password" value={password} onChange={handleChange} />
        <label>Confirm Password</label>
        <input type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
