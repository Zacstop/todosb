import styled from "styled-components";

export const FirstSectionStyle = {
  Wrapper: styled.div`
    display: flex;
    width: 1440px;
    padding: 60px 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
      padding: 20px 0px;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      align-self: stretch;
    }
    `,

  TitleContainer: styled.div`
    /* display: flex;
    width: 1180px;
    height: 90px;
    flex-direction: column;
    justify-content: center;
    color: #000;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal; */
    display: flex;
    height: 90px;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;color: #000;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,

  CardContainer: styled.div`
    display: flex;
    padding: 20px 0px;
    align-items: center;
    gap: 20px;
    align-self: stretch;
  `,

  ContentContainer: styled.div`
    display: flex;
    padding: 20px 0px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    align-self: stretch;
  `,

  ContentDesWrapper: styled.div`
    display: flex;
    padding: 20px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;

    /* text */
    color: #000000bf;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,

  FirstDes: styled.div`
    color: #757575;
  `,

  SecondDes: styled.div`

  `,

  Marker: styled.div`
    display: inline;
    font-weight: 700;
  `,

  ThirdDes: styled.div`
    display: inline;
    font-weight: 700;
  `,

  Divider: styled.div`
    width: 40%;
    border: 3px solid #D1D9E2;
    border-radius: 50px;
  `,

  ContentTags: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: stretch;
  `,

  ContentTag: styled.div`
    width: auto;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0px 10px;
  `,

  ImageContainer: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
  `,

  ImagePaper: styled.div`
    width: 528px;
    height: 528px;
    border-radius: 25px;
    background: var(--White-primary, #FFF);
    box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.10);
  `,

  Image: styled.img`
    width: 490px;
    height: 490px;
    border-radius: 25px;
    margin: 20px;
    background: lightgray 50% / cover no-repeat, #C4C4C4;
  `
};
