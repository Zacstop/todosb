import React from 'react';
import { CardStyle } from './Card.styles';

interface CardProps {
  title: string,
  menu: string,
  onLogin: () => void;
  onLogout: () => void;
}

export const TextCard = ({
  title,
  menu,
}: CardProps) => {
  return (
    <CardStyle.Wrapper>
      <CardStyle.LeftWrapper>qwer</CardStyle.LeftWrapper>
      <CardStyle.RightWrapper>asdf</CardStyle.RightWrapper>
    </CardStyle.Wrapper>
  )
};