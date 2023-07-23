import React from 'react';
import styled from 'styled-components';
import Questions from './Questions';
import { SurveyProps } from './type';

const SurveyContents = ({ surveyData }: any) => {
  return (
    <Wrapper>
      {surveyData.map((data: SurveyProps, index: number) => {
        return <Questions title={data.title} key={data.id} questionId={data.id} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: white;
`;

export default SurveyContents;
