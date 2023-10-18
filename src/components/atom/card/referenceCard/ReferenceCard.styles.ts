// import styled from "styled-components";

// export const ReferenceCardStyle = {
//   Wrapper: styled.div`
//     /* display: flex; */
//     width: 400px;
//     height: 477px;
//     display: inline-flex;
//     padding: 10px;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 10px;
//     border-radius: 50px;
//     background: var(--White-primary, #FFF);
//     box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
//     padding: 10px;

//     /* mobile */
//     @media (max-width: 375px) {
//       display: flex;
//     }
//   `,

//   Container: styled.div`
//     display: inline-flex;
//     width: 100%;
//     height: auto;
//     padding: 10px;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 20px;
//   `,
  
//   ImageWrapper: styled.img`
//     display: inline-flex;
//     align-items: center;
//     gap: 20px;
//     border-radius: 50px;
//   `,

//   TitleWrapper: styled.div`
//     display: flex;
//     width: 293px;
//     height: 113px;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//     flex-shrink: 0;

//     @media (max-width: 375px) {
//       /* display: flex; */
//     }
//   `,
// };
import styled from "styled-components";

export const ReferenceCardStyle = {
  Wrapper: styled.div`
    display: inline-flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
    }
  `,

  Container: styled.div`
    width: 380px;
    height: 457px;
    border-radius: 50px;
    background: #FFF;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
  `,
  
  ImageWrapper: styled.img`
    display: inline-flex;
    align-items: center;
    margin: 20px;
    border-radius: 50px;
  `,

  TitleWrapper: styled.div`
    display: flex;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
    flex-shrink: 0;
    margin-left: 40px;

    @media (max-width: 375px) {
      /* display: flex; */
    }
  `,

  Badges: styled.div`
    display: flex;
    width: 293px;
    align-items: flex-start;
    gap: 10px;
  `,

  Title: styled.div`
    width: auto;
    color: var(--Black-primary, #000);
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,

  SubTit: styled.div`
    width: auto;
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `
};
