import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Questions from './Questions';
import { SurveyProps } from './type';

const SurveyContents = ({ surveyData }: any) => {
  const { survey, unique_id, length } = surveyData;

  const navigate = useNavigate();

  const [userSelectArray, setUserSelectArray] = useState<any[]>([]);

  const userAnswerArray: any[] = [];

  useEffect(() => {
    survey.forEach((data: any, index: number) => {
      const newObject = {
        id: data.id,
        answer: '',
      };
      userAnswerArray.push(newObject);

      if (index + 1 === length) {
        setUserSelectArray(userAnswerArray);
      }
    });
  }, [survey]);

  const postUserAnswerHandle = async () => {
    try {
      const data = {
        unique_id: unique_id,
        answer: userSelectArray,
      };

      const response = await axios.post('/response', data);

      if (response.data.code) {
        console.log(response.data);
      } else {
        console.log(response.data);
      }
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userSelectArray.map((data, index) => {
      if (data.answer.length > 0) {
        if (index + 1 === length) {
          postUserAnswerHandle();
        }
      }
    });
  }, [userSelectArray]);

  return (
    <>
      {userSelectArray.length === length && (
        <Wrapper>
          {survey.map((data: SurveyProps, index: number) => {
            return (
              <Questions
                question={data.question}
                key={data.id}
                questionId={data.id}
                userSelectArray={userSelectArray}
                setUserSelectArray={setUserSelectArray}
                surveyId={unique_id}
              />
            );
          })}
        </Wrapper>
      )}
    </>
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
