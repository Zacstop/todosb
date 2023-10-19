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
            <FirstSectionStyle.ContentDesWrapper>
              <FirstSectionStyle.FirstDes>
                KUBE-CRO's MediXForm Data Management solution revolutionizes the management and collection of clinical data.
              </FirstSectionStyle.FirstDes>

              <FirstSectionStyle.SecondDes>
                <ol style={{wordWrap: 'break-word'}}>
                  <li><FirstSectionStyle.Marker>Flexible Forms</FirstSectionStyle.Marker>: Supports Text, Image, Video, enabling diverse studies.</li>
                  <li><FirstSectionStyle.Marker>No CRF Coding</FirstSectionStyle.Marker>: Eliminates the need for traditional CRF coding, reducing setup time.</li>
                  <li><FirstSectionStyle.Marker>Easy Changes</FirstSectionStyle.Marker>: Automatically migrates the database for updates without interruption.</li>
                  <li><FirstSectionStyle.Marker>Realtime Validation</FirstSectionStyle.Marker>: Manages queries in real-time, enhancing work efficiency.</li>
                </ol>
              </FirstSectionStyle.SecondDes>

              <FirstSectionStyle.ThirdDes>
                MediXForm is a powerful solution that increases efficiency and reliability in clinical research.
              </FirstSectionStyle.ThirdDes>
            </FirstSectionStyle.ContentDesWrapper>
            <FirstSectionStyle.Divider></FirstSectionStyle.Divider>
            <FirstSectionStyle.ContentTags>
              <FirstSectionStyle.ContentTag>XForm</FirstSectionStyle.ContentTag>
              <FirstSectionStyle.ContentTag>vaildattion</FirstSectionStyle.ContentTag>
              <FirstSectionStyle.ContentTag>migration</FirstSectionStyle.ContentTag>
              <FirstSectionStyle.ContentTag>attatchment</FirstSectionStyle.ContentTag>
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