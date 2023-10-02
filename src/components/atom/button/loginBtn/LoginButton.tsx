import React from "react";
import { LoginButtonStyles } from './LoginButton.styles'

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "excel";
}

const LoginButton = ({
  type,
  label,
  color = "primary",
  onClick,
}: Props) => {
  return (
    <LoginButtonStyles.LoginBtn type={type} onClick={onClick}>
      {label}
    </LoginButtonStyles.LoginBtn>
  );
};

export default LoginButton;
