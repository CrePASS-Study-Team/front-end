import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import styled from 'styled-components';

import Graph from './Graph';
import Mbti from './Mbti';

// import { TYPE_INFOMATION_OBJECT } from '../Result/MBTI_INFO';

const Result = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { mbti } = params;

  if (!mbti) {
    navigate('/notfound');
  }

  const mbtiUpper = mbti ? mbti.toUpperCase() : '';

  return (
    <>
      <Header />

      <Wrapper>
        <Graph />
        <Mbti mbtiKey={mbtiUpper} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #d4d4d4;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 93.5vh;
`;

export default Result;
