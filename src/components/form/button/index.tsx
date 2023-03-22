import { FC, MouseEventHandler } from "react";
import "./styles.css";

interface ButtonProps {
  label: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  size?: string | undefined;
}

const Button: FC<ButtonProps> = ({ label, handleClick, size }: ButtonProps) => {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={size?.length ? `${size}-button` : `button`}
    >
      {label}
    </button>
  );
};

export default Button;
