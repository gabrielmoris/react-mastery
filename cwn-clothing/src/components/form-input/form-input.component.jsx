import { FormImputLabel, Input, Group } from "./form-imput.styles";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && <FormImputLabel shrink={otherProps.value.length}>{label}</FormImputLabel>}
    </Group>
  );
};

export default FormInput;

// import "./form-input.styles.scss";
// const FormInput = ({ label, ...otherProps }) => {
//   return (
//     <div className="group">
//       <input className="form-input" {...otherProps} />
//       {label && <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label>}
//     </div>
//   );
// };

// export default FormInput;
