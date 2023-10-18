import React from 'react';
import { FirstSectionStyle } from './FirstSection.styles';

interface FirstSectionProps {
  title: string,
  imageSrc: string,
}

export const FirstSection = ({
  title,
  imageSrc,
}: FirstSectionProps) => {
  return (
    <div style={{display: 'flex'}}>
      <FirstSectionStyle.Wrapper>
        <FirstSectionStyle.TitleContainer>
          {title}
        </FirstSectionStyle.TitleContainer>

        <FirstSectionStyle.CardContainer>
          <FirstSectionStyle.ContentContainer>
            <FirstSectionStyle.ContentDes>
            KUBE-CRO's MediXForm Data Management solution revolutionizes the management and collection of clinical data. 

Flexible Forms: Supports Text, Image, Video, enabling diverse studies.
No CRF Coding: Eliminates the need for traditional CRF coding, reducing setup time.
Easy Changes: Automatically migrates the database for updates without interruption.
Realtime Validation: Manages queries in real-time, enhancing work efficiency.

MediXForm is a powerful solution that increases efficiency and reliability in clinical research.
            </FirstSectionStyle.ContentDes>
            <FirstSectionStyle.ContentTags>
              XForm vaildattion migration attatchment
            </FirstSectionStyle.ContentTags>
          </FirstSectionStyle.ContentContainer>
          <FirstSectionStyle.ImageContainer>
            <FirstSectionStyle.ImagePaper>
              <FirstSectionStyle.Image src={imageSrc}></FirstSectionStyle.Image>
            </FirstSectionStyle.ImagePaper>
          </FirstSectionStyle.ImageContainer>
        </FirstSectionStyle.CardContainer>
      </FirstSectionStyle.Wrapper>
    </div>
  )
};