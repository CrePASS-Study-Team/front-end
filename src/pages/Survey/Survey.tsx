import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import surveyBottom from '../../assets/surveyTitleBottom.png';
import SurveyHeader from './components/SurveyHeader';
import SurveyContents from './components/SurveyContents';
import SurveyInfo from './components/SurveyInfo';
import axios from 'axios';
import Loading from '../../components/Loading';

import info1 from '../../assets/survey/info1.png';
import info2 from '../../assets/survey/info2.png';
import info3 from '../../assets/survey/info3.png';

interface SurveyData {
  unique_id: string;
  length: number;
  survey: any;
}

const Survey = () => {
  const [surveyData, setSurveyData] = useState<SurveyData>({
    length: 0,
    unique_id: '',
    survey: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const surveyScrollRef = useRef<any>(null);

  const instance = axios.create({
    timeout: 300000, // 60초
  });

  useEffect(() => {
    const MAX_RETRIES = 3;
    let retries = 0;

    const SurveyDataHandle = async () => {
      try {
        setIsLoading(true);
        const response = await instance.post('http://mbti.crepassplus.com/api/survey/create');

        if (response.data.code === 200) {
          setIsLoading(false);
          const jsonObject = await JSON.parse(response.data.data.survey);
          setSurveyData({
            unique_id: response.data.data.unique_id,
            length: response.data.data.length,
            survey: jsonObject,
          });
        } else {
          // 재시도 로직
          if (retries < MAX_RETRIES) {
            retries++;
            setTimeout(SurveyDataHandle, 2000); // 2초 대기 후 재시도
          } else {
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    SurveyDataHandle();
  }, []);

  // useEffect(() => {
  //   const navGetDataHandle = async () => {
  //     try {
  //       const response = await axios.post('http://mbti.crepassplus.com/api/navigation');

  //       console.log(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   navGetDataHandle();
  // }, []);

  return (
    <div ref={surveyScrollRef}>
      {isLoading && <Loading />}
      <Header />
      <SurveyHeader />
      <TitleHeaderBottom>
        <SurveyBottomLine src={surveyBottom} alt="surveyBottom" />
        <SurveyIntroContents>
          <SurveyInfo
            backgroundColor="#FCFFD7"
            title="총 검사 시간은 12분 내외 입니다."
            src={info1}
          />
          <SurveyInfo
            backgroundColor="#C0E1FF"
            title="혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오."
            src={info2}
          />
          <SurveyInfo
            backgroundColor="#FBE4FF"
            title="가능하면 답변 시 '중립'을 선택하지 마십시오."
            src={info3}
          />
        </SurveyIntroContents>
      </TitleHeaderBottom>
      {surveyData.survey && (
        <SurveyContents surveyData={surveyData} surveyScrollRef={surveyScrollRef} />
      )}
    </div>
  );
};

const TitleHeaderBottom = styled.div`
  position: relative;

  width: 100%;
  height: 400px;
  background-color: #009556;
`;

const SurveyBottomLine = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70%;

  z-index: 10;
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
