import { FC } from "react";
import "./styles.css";

interface HeaderProps {
  label: string;
}

const Header: FC<HeaderProps> = ({ label }: HeaderProps) => {
  return (
    <header>
      <h1 className="header-text">{label}</h1>
    </header>
  );
};

export default Header;
