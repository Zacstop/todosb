import React from 'react';
import { ImageFrameStyle } from './ImageFrame.styles';

interface ImageFrameProps {
  title: string,
  menu: string,
  onLogin: () => void;
  onLogout: () => void;
}

export const ImageFrame = ({
  title,
  menu,
}: ImageFrameProps) => {
  return (
    <ImageFrameStyle.Wrapper>
      <ImageFrameStyle.ImageWrapper>
        <ImageFrameStyle.Image src='http://placehold.it/200x200'/>
      </ImageFrameStyle.ImageWrapper>
    </ImageFrameStyle.Wrapper>
  )
};