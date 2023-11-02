import { useState } from "react";

const defautFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defautFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your Email and Password</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
