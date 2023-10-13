import React from 'react';
import { CardStyle } from './Card.styles';
import { TextImageFrame } from '../imageFrame/textImageFrame/TextImageFrame';

interface CardProps {
  title: string,
  des: string,
  imageTitle: string,
  imageSrc: string,
}

export const TextCard = ({
  title,
  des,
  imageTitle,
  imageSrc
}: CardProps) => {
  return (
    <CardStyle.Wrapper>
      <CardStyle.LeftWrapper>
        <TextImageFrame descripsion={imageTitle} imageSrc={imageSrc}/>
      </CardStyle.LeftWrapper>
      <CardStyle.RightWrapper>
        <CardStyle.Container>
          <CardStyle.CardTitle>{title}</CardStyle.CardTitle>
          <CardStyle.CardDes>
            {des}
          </CardStyle.CardDes>
        </CardStyle.Container>
      </CardStyle.RightWrapper>
    </CardStyle.Wrapper>
  )
};