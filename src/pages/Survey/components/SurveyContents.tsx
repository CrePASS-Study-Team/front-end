import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Questions from './Questions';
import { SurveyProps } from './type';

const SurveyContents = (props: any) => {
  const { surveyData, setIsLoading } = props;
  const { survey, unique_id, length } = surveyData;

  const navigate = useNavigate();

  const [userSelectArray, setUserSelectArray] = useState<any[]>([]);

  const userAnswerArray: any[] = [];

  useEffect(() => {
    survey.forEach((data: any, index: number) => {
      const newObject = {
        id: data.id,
        answers: '',
      };
      userAnswerArray.push(newObject);

      if (index + 1 === length) {
        setUserSelectArray(userAnswerArray);
      }
    });
  }, [survey]);

  const postUserAnswerHandle = async () => {
    try {
      setIsLoading(true);
      const data = {
        unique_id: unique_id,
        answers: userSelectArray,
      };
      const response = await axios.post('https://mbti.crepassplus.com/api/survey/answers', data);

      if (response.data.code === 200) {
        setIsLoading(false);
        navigate(`/result/${response.data.data.id}`);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

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
          <Button onClick={() => postUserAnswerHandle()}>제출</Button>
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

const Button = styled.button`
  background-color: #095ea5;

  margin-bottom: 5rem;
  width: 20rem;
  height: 5rem;
  border-radius: 4rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1); // 원래 크기의 1.1배로 확대
  }
`;

export default SurveyContents;
