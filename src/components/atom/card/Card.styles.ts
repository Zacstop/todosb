import styled from "styled-components";

export const CardStyle = {
  // Wrapper: styled.div`
  //   display: flex;
  //   width: 1180px;
  //   height: 363px;
  //   justify-content: space-between;
  //   align-items: center;

  //   /* mobile */
  //   @media (max-width: 320px) {
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
  display: flex;
  padding: 20px;
  align-items: center;
  gap: 20px;
  align-self: stretch;

  /* mobile */
  @media (max-width: 320px) {
    display: flex;
  }

  /* tablet */
  @media (max-width: 768px) {
    background-color: "";
  }
`,

LeftWrapper: styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  align-items: center;
`,

RightWrapper: styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  flex: 1 0 0;
  align-self: stretch;
`
};
