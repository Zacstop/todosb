import React from 'react';
import { ReverseCardStyle } from './ReverseCard.styles';
import { TextImageFrame } from '../../imageFrame/textImageFrame/TextImageFrame';

interface CardProps {
  title: string,
  des: string,
  imageSrc: string,
}

export const ReverseTextCard = ({
  title,
  des,
  imageSrc,
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
        <TextImageFrame descripsion={'효율적인 시스템 환경'} imageSrc={'http://placehold.it/260x200'}/>
      </ReverseCardStyle.RightWrapper>
    </ReverseCardStyle.Wrapper>
  )
};