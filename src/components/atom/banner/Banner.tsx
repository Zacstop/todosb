import React from 'react';
import { BannerStyle } from './Banner.styles';
import Button from '../button/Button';

interface BannerProps {
  title: string,
  imageSrc: string,
}

export const Banner = ({
  title,
  imageSrc,
}: BannerProps) => {
  return (
    <BannerStyle.Wrapper content={imageSrc}>
      <BannerStyle.Container>
        <BannerStyle.TitleWrapper>{title}</BannerStyle.TitleWrapper>
        <BannerStyle.ButtonWrapper>
          <Button label='Register Today' type='button' color='secondary'/>
        </BannerStyle.ButtonWrapper>
      </BannerStyle.Container>
    </BannerStyle.Wrapper>
  )
};