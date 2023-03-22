import { FC } from "react";

interface FormRowProps {
  label: string;
  handleChange: Function;
}

const FormRow: FC<FormRowProps> = ({ label, handleChange }: FormRowProps) => {
  return (
    <div className="form-row">
      <p className="form-label">{label}</p>
      <input className="form-input" onChange={() => handleChange()} />
    </div>
  );
};

export default FormRow;
