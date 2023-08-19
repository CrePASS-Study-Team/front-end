import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import surveyBottom from '../../assets/surveyTitleBottom.png';
import SurveyHeader from './components/SurveyHeader';
import SurveyContents from './components/SurveyContents';
import SurveyInfo from './components/SurveyInfo';
import axios from 'axios';

const Survey = () => {
  const [surveyData, setSurveyData] = useState(null);

  const surveyScrollRef = useRef<any>(null);

  useEffect(() => {
    const SurveyDataHandle = async () => {
      try {
        const response = await axios.get('/mockData/survey.json');
        // const response = await axios.get('http://mbti.crepassplus.com/api/create');
        setSurveyData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    SurveyDataHandle();
  }, []);

  return (
    <div ref={surveyScrollRef}>
      <Header />
      <SurveyHeader />
      <TitleHeaderBottom>
        <img src={surveyBottom} alt="surveyBottom" />
        <SurveyIntroContents>
          <SurveyInfo backgroundColor="#FCFFD7" title="총 검사 시간은 12분 내외입니다." />
          <SurveyInfo
            backgroundColor="#C0E1FF"
            title="혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오."
          />
          <SurveyInfo
            backgroundColor="#FBE4FF"
            title="가능하면 답변 시 '중립'을 선택하지 마십시오."
          />
        </SurveyIntroContents>
      </TitleHeaderBottom>
      {surveyData && <SurveyContents surveyData={surveyData} surveyScrollRef={surveyScrollRef} />}
    </div>
  );
};

const TitleHeaderBottom = styled.div`
  position: relative;

  width: 100%;
  height: 400px;
  background-color: #009556;

  img {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;

    z-index: 10;
  }
`;

const SurveyIntroContents = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: center;
`;

export default Survey;
