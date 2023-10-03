import React from 'react';
import { CardStyle } from './Card.styles';
import { TextImageFrame } from '../imageFrame/textImageFrame/TextImageFrame';

interface CardProps {
  title: string,
  menu: string,
  imageTitle: string,
}

export const TextCard = ({
  title,
  menu,
  imageTitle,
}: CardProps) => {
  return (
    <CardStyle.Wrapper>
      <CardStyle.LeftWrapper>
        <TextImageFrame descripsion={imageTitle}/>
      </CardStyle.LeftWrapper>
      <CardStyle.RightWrapper>
        <CardStyle.Container>
          <CardStyle.CardTitle>{title}</CardStyle.CardTitle>
          <CardStyle.CardDes>
            {menu}
          </CardStyle.CardDes>
        </CardStyle.Container>
      </CardStyle.RightWrapper>
    </CardStyle.Wrapper>
  )
};