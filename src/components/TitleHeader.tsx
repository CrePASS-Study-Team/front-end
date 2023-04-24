import React from 'react';
import styled from 'styled-components';

const TitleHeader = ({ title, src }: any) => {
  return (
    <ContentsHeader>
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
  margin-top: 10rem;
  width: 100%;
  height: 30vh;
  color: white;
  font-size: 6rem;
  font-weight: 700;
`;

const BottomLine = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export default TitleHeader;
