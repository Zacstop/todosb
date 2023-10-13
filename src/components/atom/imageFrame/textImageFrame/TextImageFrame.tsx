import React from 'react';
import { TextImageFrameStyle } from './TextImageFrame.styles';

interface TextImageFrameProps {
  descripsion: string,
  imageSrc: string,
}

export const TextImageFrame = ({
  descripsion,
  imageSrc,
}: TextImageFrameProps) => {
  return (
    <TextImageFrameStyle.Wrapper>
      <TextImageFrameStyle.ImageWrapper>
        <TextImageFrameStyle.Image src={imageSrc}/>
        <TextImageFrameStyle.TextContainer>
          {descripsion}
        </TextImageFrameStyle.TextContainer>
      </TextImageFrameStyle.ImageWrapper>
    </TextImageFrameStyle.Wrapper>
  )
};