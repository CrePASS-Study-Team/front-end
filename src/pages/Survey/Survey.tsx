import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import surveyBottom from '../../assets/surveyBottom.png';
import SurveyHeader from './components/SurveyHeader';
import SurveyContents from './components/SurveyContents';
import axios from 'axios';

const Survey = () => {
  const [surveyData, setSurveyData] = useState(null);

  useEffect(() => {
    const SurveyDataHandle = async () => {
      try {
        const response = await axios.get('/mockData/survey.json');

        setSurveyData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    SurveyDataHandle();
  }, []);

  return (
    <div>
      <Header />
      <SurveyHeader />
      <TitleHeaderBottom>
        <img src={surveyBottom} alt="surveyBottom" />
        <SurveyIntroContents>
          <SurveyIntro>
            <SurveyIntroImage />
            <SurveyIntroText>총 검사 시간은 12분 내외입니다.</SurveyIntroText>
          </SurveyIntro>
          <SurveyIntro>
            <SurveyIntroImage />
            <SurveyIntroText>총 검사 시간은 12분 내외입니다.</SurveyIntroText>
          </SurveyIntro>
          <SurveyIntro>
            <SurveyIntroImage />
            <SurveyIntroText>총 검사 시간은 12분 내외입니다.</SurveyIntroText>
          </SurveyIntro>
        </SurveyIntroContents>
      </TitleHeaderBottom>
      {surveyData && <SurveyContents surveyData={surveyData} />}
    </div>
  );
};

const TitleHeaderBottom = styled.div`
  position: relative;
  margin-bottom: 150px;

  width: 100%;
  height: 400px;
  background-color: white;

  img {
    width: 100%;
    height: 70%;
  }
`;

const SurveyIntroContents = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: center;
`;

const SurveyIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  height: 255px;

  border-radius: 8px;
  background-color: white;
  margin-right: 30px;
`;

const SurveyIntroImage = styled.div`
  width: 90px;
  height: 90px;
  background-color: red;

  margin: 25px 0;
`;

const SurveyIntroText = styled.div`
  margin-top: 10%;

  width: 70%;

  text-align: center;

  font-size: 17px;
  font-weight: 700;
`;

export default Survey;
