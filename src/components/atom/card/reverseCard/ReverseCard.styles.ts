import styled from "styled-components";

export const ReverseCardStyle = {
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
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex: 1 0 0;

    @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      order: 1;
    }
  `,

  RightWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      align-self: stretch;
      order: 0;
    }
  `,

  Container: styled.div`
    display: flex;
    /* padding: 20px; */
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
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%; /* 40px */
  `,
};
