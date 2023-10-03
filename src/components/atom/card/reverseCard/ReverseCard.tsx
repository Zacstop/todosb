import React from 'react';
import { ReverseCardStyle } from './ReverseCard.styles';
import { TextImageFrame } from '../../imageFrame/textImageFrame/TextImageFrame';

interface CardProps {
  title: string,
  des: string,
}

export const ReverseTextCard = ({
  title,
  des,
}: CardProps) => {
  return (
    <ReverseCardStyle.Wrapper>
      <ReverseCardStyle.LeftWrapper>
        <ReverseCardStyle.Container>
          <ReverseCardStyle.CardTitle>{title}</ReverseCardStyle.CardTitle>
          <ReverseCardStyle.CardDes>
            {des}
          </ReverseCardStyle.CardDes>
        </ReverseCardStyle.Container>
      </ReverseCardStyle.LeftWrapper>
      <ReverseCardStyle.RightWrapper>
        <TextImageFrame descripsion={'효율적인 시스템 환경'}/>
      </ReverseCardStyle.RightWrapper>
    </ReverseCardStyle.Wrapper>
  )
};