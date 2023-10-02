import styled from "styled-components";
import { ButtonStyles } from "./Button.styles";

interface ButtonContainerProps {
  btnColor: "primary" | "secondary" | "excel";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${ButtonStyles}

  ${({ btnColor }) => {
    switch (btnColor) {
      case "primary":
        return `
          color: #fff;
          background-color: #007bff;
          border-color: #007bff;
        `;
      case "secondary":
        return ``;
      case "excel":
        return `
          color: #fff;
          background-color: #40bf7f;
          border-color: #40bf7f;
        `;
    }
  }}
`;
