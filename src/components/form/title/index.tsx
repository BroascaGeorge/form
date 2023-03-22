import { FC } from "react";

interface FormTitleProps {
  label: string;
}

const FormTitle: FC<FormTitleProps> = ({ label }: FormTitleProps) => {
  return <h1 className="form-title">{label}</h1>;
};

export default FormTitle;
