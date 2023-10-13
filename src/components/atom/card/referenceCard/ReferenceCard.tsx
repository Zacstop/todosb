import React from 'react';
import { ReferenceCardStyle } from './ReferenceCard.styles';

interface ReferenceCardProps {
  title: string,
  imageSrc: string,
}

export const ReferenceCard = ({
  title,
  imageSrc,
}: ReferenceCardProps) => {
  return (
    <ReferenceCardStyle.Wrapper>
      {/* <ReferenceCardStyle.Back src='https://s3-alpha-sig.figma.com/img/71c4/2139/5fc25bf9d27ea1b1bec2a63b1da5233d?Expires=1697414400&Signature=iD6X3rOcHDymUHVVL8hNr74WgPf3dgJPMTLCXpJXAvCM4co3wTF0fcNZsMFUBS6YZKIEwuSYVAthA1Eef6VNgm4b~820~YLdUb4LRnsqW2s3lkkS1m7OFCQ0HIDwwV7~h4TflnjdvOTcVdSzSFfM~1GNlJDVpFEeoVqQ6~LEL5iBsromI0X5BWAkgwe9MNYWPs2Ki~rA2A318kEghIJwBb~jwer5PXPRLayAE35T2H0avuHessDIHSL60YMQOqfl-nw6o61w~PtInv7UcBv65WahtQmcY-ItD2FXCFEMkqHhd0W9ZTyltc1MfXID0clfc2sAuVSkMhe61Wslwm1gHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/> */}
      <ReferenceCardStyle.TitleWrapper>{title}</ReferenceCardStyle.TitleWrapper>
      <ReferenceCardStyle.ButtonWrapper>
        a
      </ReferenceCardStyle.ButtonWrapper>
    </ReferenceCardStyle.Wrapper>
  )
};