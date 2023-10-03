import styled from "styled-components";

export const TextImageFrameStyle = {
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
    padding: 10px;
    border-radius: 25px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #C4C4C4;
  `,

  TextContainer: styled.div`
    width: 230px;
    color: var(--Black-primary, #000);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0px 0px 25px 20px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    display:inline-block;
  `,

  Image: styled.img`
    width: auto;
    border-radius: inherit;
    margin-bottom: 20px;
  `
};
