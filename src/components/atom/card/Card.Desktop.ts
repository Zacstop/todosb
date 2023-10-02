import styled from "styled-components";

export const HeaderStyle = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 1.25rem;
    box-shadow: 0 2px 4px 0 rgba(52, 64, 81, 0.12);
    background-color: #1a75ff;
  `,

  WrapperLeft: styled.div`
    height: 2rem;
    gap: 20px;
  `,

  WrapperRight: styled.div`
    gap:36px;
  `,

  Title: styled.p`
    height: 1.5rem;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  `,
};
