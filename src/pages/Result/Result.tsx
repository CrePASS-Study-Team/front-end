import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import styled from 'styled-components';

import Graph from './Graph';
import Mbti from './Mbti';

import { MBTI_BACKGROUND_OBJECT } from './MBTI_INFO';
import axios from 'axios';

interface WrapperBgProps {
  bg: string;
}

interface ResultDataType {
  id: string;
  percentage: PercentageType;
  result: string;
  type: string;
}

export interface PercentageType {
  I: string;
  E: string;
  N: string;
  S: string;
  T: string;
  F: string;
  J: string;
  P: string;

  [key: string]: string;
}

const Result = () => {
  const [resultData, setResultData] = useState<ResultDataType>();

  const params = useParams();
  const { id } = params;

  const getResultGetApiCall = async () => {
    try {
      const response = await axios.get(`https://mbti.crepassplus.com/api/survey/result/${id}`);

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

  return (
    <>
      {resultData && (
        <>
          <Header />
          <Wrapper bg={MBTI_BACKGROUND_OBJECT[resultData.type]}>
            <Graph percentage={resultData.percentage} />
            <Mbti mbtiKey={resultData.type} />
          </Wrapper>
        </>
      )}
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
