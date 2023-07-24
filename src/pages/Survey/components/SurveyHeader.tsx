import React from 'react';
import styled from 'styled-components';

const TitleHeader = () => {
  return <ContentsHeader>무료 성격유형검사</ContentsHeader>;
};

//#TODO HeadLine Style Fix

const ContentsHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30vh;
  color: white;
  font-size: 6rem;
  font-weight: 700;
  background-color: #009556;
  line-height: 400px;
`;

export default TitleHeader;
