import styled from "styled-components";

export const BadgeStyle = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
    }
  `,

  Container: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
  `,

  Content: styled.div`
    display: flex;
    padding: 0px 11px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    /* background: #FCDDEC; */
    background: #${props => props.color};
  `,

  Title: styled.div`
    /* color: #F178B6; */
    color: #292929;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,

  Num: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-left: 8px
  `
};
