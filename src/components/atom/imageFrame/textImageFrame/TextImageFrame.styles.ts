import styled from "styled-components";

export const TextImageFrameStyle = {
  Wrapper: styled.div`
    width: fit-content;
    height: auto;
    flex-shrink: 0;
    border-radius: 25px;
    background: #FFF;
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
    display: flex;
    padding: 10px;
    border-radius: 25px;
    flex-direction: column;
  `,

  TextContainer: styled.div`
    width: 230px;
    color: #000;
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
