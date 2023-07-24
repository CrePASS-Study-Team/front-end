import React from 'react';
import styled from 'styled-components';

const TitleHeader = ({ title, src, fontColor }: any) => {
  return (
    <ContentsHeader color={fontColor}>
      {title}
      {src && <BottomLine src={src} alt="bottomLine" />}
    </ContentsHeader>
  );
};

//#TODO HeadLine Style Fix

const ContentsHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30vh;
  font-size: 78px;
  font-weight: 700;
  margin-top: 90px;
`;

const BottomLine = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export default TitleHeader;
