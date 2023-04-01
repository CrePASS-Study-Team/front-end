import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';

const TypeIntroduction = () => {
  return (
    <div>
      <Header />
      <ContentsHeader>성격유형</ContentsHeader>
      <TypeContainer style={{ background: '#E2E9FF' }}>분석가형</TypeContainer>
      <TypeContainer style={{ background: '#D5FFDB' }}>외교관형</TypeContainer>
      <TypeContainer style={{ background: '#CEFFFF' }}>관리자형</TypeContainer>
      <TypeContainer style={{ background: '#FFF7B1' }}>탐험가형</TypeContainer>
    </div>
  );
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

const TypeContainer = styled.div`
  margin-top: 1vh;
  width: 100%;
  height: 50vh;
  text-align: center;
  color: white;
  font-size: 12rem;
  font-weight: 700;
`;

export default TypeIntroduction;
