import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import styled from 'styled-components';

import Graph from './Graph';
import Mbti from './Mbti';

import { MBTI_BACKGROUND_OBJECT } from './MBTI_INFO';
import axios from 'axios';

interface WrapperBgProps {
  bg: string;
}

// import { TYPE_INFOMATION_OBJECT } from '../Result/MBTI_INFO';

const Result = () => {
  const [resultData, setResultData] = useState();

  const mbti = 'INTJ';

  const getResultGetApiCall = async () => {
    const resultId = 'chatcmpl-8RzJBYPsqoia16iLwCqRZvF27W8Ea';
    try {
      const response = await axios.get(
        `https://mbti.crepassplus.com/api/survey/result/${resultId}`,
      );

      if (response.data.code === 200) {
        setResultData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResultGetApiCall();
  }, []);

  console.log(resultData);

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
