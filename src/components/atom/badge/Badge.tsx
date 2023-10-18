import React from 'react';
import { BadgeStyle } from './Badge.styles';

interface BadgeProps {
  title: string,
  num: string,
  color: string,
}

export const Badge = ({
  title,
  num,
  color
}: BadgeProps) => {
  return (
    <BadgeStyle.Wrapper>
      <BadgeStyle.Container>
        <BadgeStyle.Content color={color}>
          <BadgeStyle.Title>
            {title}
          </BadgeStyle.Title>
        </BadgeStyle.Content>
      </BadgeStyle.Container>
      
      <BadgeStyle.Num>
      {num}
    </BadgeStyle.Num>
  </BadgeStyle.Wrapper>
  )
};