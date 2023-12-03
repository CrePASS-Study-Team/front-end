import React from 'react';

import Header from '../../components/Header';
import styled from 'styled-components';

import Graph from './Graph';
import Mbti from './Mbti';

import { MBTI_BACKGROUND_OBJECT } from './MBTI_INFO';

interface WrapperBgProps {
  bg: string;
}

// import { TYPE_INFOMATION_OBJECT } from '../Result/MBTI_INFO';

const Result = () => {
  const mbti = 'INTJ';

  return (
    <>
      <Header />
      <Wrapper bg={MBTI_BACKGROUND_OBJECT[mbti]}>
        <Graph />
        <Mbti mbtiKey={mbti} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div<WrapperBgProps>`
  background-color: ${props => props.bg};

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 93.5vh;
`;

export default Result;
