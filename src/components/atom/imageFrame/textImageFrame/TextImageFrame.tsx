import React from 'react';
import { TextImageFrameStyle } from './TextImageFrame.styles';

interface TextImageFrameProps {
  title: string,
  descripsion: string,
  onLogin: () => void;
  onLogout: () => void;
}

export const TextImageFrame = ({
  title,
  descripsion,
}: TextImageFrameProps) => {
  return (
    <TextImageFrameStyle.Wrapper>
      <TextImageFrameStyle.ImageWrapper>
        <TextImageFrameStyle.Image src='http://placehold.it/260x200'/>
        <TextImageFrameStyle.TextContainer>
          {descripsion}
        </TextImageFrameStyle.TextContainer>
      </TextImageFrameStyle.ImageWrapper>
    </TextImageFrameStyle.Wrapper>
  )
};