import styled from "styled-components";

export const ImageFrameStyle = {
  Wrapper: styled.div`
    width: fit-content;
    height: auto;
    flex-shrink: 0;
    border-radius: 25px;
    background: var(--White-primary, #FFF);
    box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.10);

    /* mobile */
    @media (max-width: 320px) {
      display: flex;
    }

    /* tablet */
    @media (max-width: 768px) {
      background-color: "";
    }
  `,

  ImageWrapper: styled.div`
    border-radius: 25px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #C4C4C4;
  `,

  Image: styled.img`
    width: auto;
    border-radius: inherit;
    padding: 20px;
  `
};
