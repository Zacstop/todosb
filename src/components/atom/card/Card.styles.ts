import styled from "styled-components";

export const CardStyle = {
  // Wrapper: styled.div`
  //   display: flex;
  //   width: 1180px;
  //   height: 363px;
  //   justify-content: space-between;
  //   align-items: center;

  //   /* mobile */
  //   @media (max-width: 375px) {
  //     display: flex;
  //   }

  //   /* tablet */
  //   @media (max-width: 768px) {
  //     background-color: "";
  //   }
  // `,

  // LeftWrapper: styled.div`
  //   display: flex;
  //   width: 280px;
  //   justify-content: space-between;
  //   align-items: center;
  //   flex-shrink: 0;
  // `,

  // RightWrapper: styled.div`
  //   display: flex;
  //   width: 826px;
  //   height: 353px;
  //   flex-direction: column;
  //   align-items: center;
  //   gap: 14px;
  //   flex-shrink: 0;
  // `
  Wrapper: styled.div`
    max-width: 1200px;
    display: flex;
    padding: 20px;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    background-color: #FFF;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      align-self: stretch;
    }

    /* tablet */
    @media (max-width: 768px) {
      background-color: "";
    }
  `,

  LeftWrapper: styled.div`
    display: flex;
    width: 280px;
    max-width: 280px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 375px) {
      display: flex;
      width: auto;
      max-width: auto;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  `,

  RightWrapper: styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    flex: 1 0 0;
    align-self: stretch;

    @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      align-self: stretch;
      padding: 0px;
    }
  `,

  Container: styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    flex: 1 0 0;
    align-self: stretch;
  `,

  CardTitle: styled.div`
    align-self: stretch;
    color: var(--Black-primary, #000);
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  
  CardDes: styled.div`
    align-self: stretch;
    color: var(--Black-75, rgba(0, 0, 0, 0.50));
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%; /* 40px */
  `,
};
