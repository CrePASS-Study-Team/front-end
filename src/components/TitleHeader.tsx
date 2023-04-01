import React from 'react';
import styled from 'styled-components';

const TitleHeader = ({ title }: any) => {
  return <ContentsHeader>{title}</ContentsHeader>;
};

const ContentsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  color: white;
  font-size: 3rem;
  font-weight: 700;
`;

export default TitleHeader;
