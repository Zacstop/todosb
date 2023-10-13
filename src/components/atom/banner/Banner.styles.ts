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
    background-image: url("https://s3-alpha-sig.figma.com/img/71c4/2139/5fc25bf9d27ea1b1bec2a63b1da5233d?Expires=1697414400&Signature=iD6X3rOcHDymUHVVL8hNr74WgPf3dgJPMTLCXpJXAvCM4co3wTF0fcNZsMFUBS6YZKIEwuSYVAthA1Eef6VNgm4b~820~YLdUb4LRnsqW2s3lkkS1m7OFCQ0HIDwwV7~h4TflnjdvOTcVdSzSFfM~1GNlJDVpFEeoVqQ6~LEL5iBsromI0X5BWAkgwe9MNYWPs2Ki~rA2A318kEghIJwBb~jwer5PXPRLayAE35T2H0avuHessDIHSL60YMQOqfl-nw6o61w~PtInv7UcBv65WahtQmcY-ItD2FXCFEMkqHhd0W9ZTyltc1MfXID0clfc2sAuVSkMhe61Wslwm1gHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: lightgray 50% / cover no-repeat, #3E86F5;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
    }
  `,

  TitleWrapper: styled.div`
    width: 743px;
    height: 151px;
    position: absolute;
    left: 218px;
    top: 114px;
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media (max-width: 375px) {
      /* display: flex; */
    }
  `,

  ButtonWrapper: styled.div`
    width: 220px;
    height: 80px;
    position: absolute;
    left: 50%;
    bottom: 10%;
    filter: drop-shadow(4px 8px 25px rgba(62, 134, 245, 0.25));
  `
};
