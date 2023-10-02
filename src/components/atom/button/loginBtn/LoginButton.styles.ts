import styled from "styled-components";

export const LoginButtonStyles = {
  LoginBtn: styled.button`
    width: 141px;
    height: 65px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--White-primary, #FFF);
    border: none;

    color: var(--Blue-primary, #3E86F5);
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    /* mobile */
    @media (max-width: 320px) {
      display: flex;
      width: 24px;
      height: 24px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
  `,
};
