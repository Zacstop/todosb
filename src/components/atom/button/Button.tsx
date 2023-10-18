import React, { SVGProps } from "react";
import { ButtonContainer } from "./Button.Desktop";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  // Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  label: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "excel";
}

const Button = ({
  type,
  // Icon,
  label,
  color = "primary",
  onClick,
}: Props) => {
  return (
    <ButtonContainer type={type} onClick={onClick} btnColor={color}>
      {/* {Icon && <Icon />} */}
      {label}
    </ButtonContainer>
  );
};

export default Button;
