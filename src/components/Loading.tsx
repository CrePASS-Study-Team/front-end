import React from 'react';
import styled from 'styled-components';
import Spinner from '../assets/spinner.gif';

const Loading = () => {
  return (
    <Background>
      <LoadingText>Chat GPT로 설문을 생성중입니다.</LoadingText>
      <img src={Spinner} alt="로딩중" width="5%" />
    </Background>
  );
};

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

export default Loading;
