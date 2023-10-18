import { css } from "styled-components";

export const ButtonStyles = css`
  /* min-width: 120px;
  min-height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;

  transition: filter 0.15s ease-in-out;

  svg {
    path {
      stroke: #fff;
    }
  }

  &:hover {
    filter: brightness(85%);
  } */
  width: auto;
  flex-shrink: 0;
  font-family: Poppins;
  border: none;
  border-radius: 15px;
  background: #FFF;
  color: #3E86F5;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding: 20px;

  @media (max-width: 375px) {
    padding: 20px;
  }
`;
