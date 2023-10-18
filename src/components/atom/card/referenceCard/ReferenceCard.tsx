import React from 'react';
import { ReferenceCardStyle } from './ReferenceCard.styles';
import { Badge } from '../../badge/Badge';

interface ReferenceCardProps {
  title: string,
  imageSrc: string,
}

export const ReferenceCard = ({
  title,
  imageSrc,
}: ReferenceCardProps) => {
  return (
    <ReferenceCardStyle.Wrapper>
      <ReferenceCardStyle.Container>
        <ReferenceCardStyle.ImageWrapper src={imageSrc}></ReferenceCardStyle.ImageWrapper>
        <ReferenceCardStyle.TitleWrapper>
          <ReferenceCardStyle.Badges>
            <Badge title='PMS' num='6'></Badge>
            <Badge title='Vecsin' num='1'></Badge>
          </ReferenceCardStyle.Badges>
          <ReferenceCardStyle.Title>
            {title}
          </ReferenceCardStyle.Title>
          <ReferenceCardStyle.SubTit>
            Study/7
          </ReferenceCardStyle.SubTit>
        </ReferenceCardStyle.TitleWrapper>
      </ReferenceCardStyle.Container>
    </ReferenceCardStyle.Wrapper>
  )
};