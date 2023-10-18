import styled from "styled-components";

export const BannerStyle = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 1180px;
    height: 500px;
    font-family: Poppins;
    border-radius: 100px;
    background-image: url(${props => props.content});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: lightgray 50% / cover no-repeat, #3E86F5;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
      width: auto;
    }
  `,

  Container: styled.div`
    width: auto;
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
  `,

  TitleWrapper: styled.div`
    width: 743px;
    height: 151px;
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 30px;

    @media (max-width: 375px) {
      width: 271.008px;
      height: 151px;
      color: var(--White-primary, #FFF);
      text-align: center;
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  `,

  ButtonWrapper: styled.div`
    /* width: 220px;
    height: 80px; */
    filter: drop-shadow(4px 8px 25px rgba(62, 134, 245, 0.25));
    @media (max-width: 375px) {
      margin-top: 30px;
    }
  `
};
