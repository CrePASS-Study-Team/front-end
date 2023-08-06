import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import surveyF1 from '../../../assets/survey/surveyF1.png';
import surveyF2 from '../../../assets/survey/surveyF2.png';
import surveyF3 from '../../../assets/survey/surveyF3.png';
import surveyF4 from '../../../assets/survey/surveyF4.png';
import surveyF5 from '../../../assets/survey/surveyF5.png';
import surveyF6 from '../../../assets/survey/surveyF6.png';
import surveyF7 from '../../../assets/survey/surveyF7.png';

interface QuestionsProps {
  title: string;
  questionId: number;
}

interface SelectOptionProps {
  id: number;
  src: string;
  alt: string;
}

interface UserInputProps {
  id: number;
  answer: number;
}

type SelectOptionStyledProps = {
  src: string;
  alt: string;
  isSelect: boolean;
  onClick: () => void;
};

type WrapperStyledProps = {
  userSelectAnswer: boolean;
};

const Questions = (props: QuestionsProps) => {
  const { title, questionId } = props;
  const questionRef = useRef<HTMLDivElement>(null); // ref 생성

  const [userAnswer, setUserAnswer] = useState<UserInputProps>({ id: questionId, answer: 0 });

  const onClickHandle = (option: number) => {
    setUserAnswer({ ...userAnswer, answer: option });
  };

  useEffect(() => {
    if (userAnswer.answer > 0) {
      if (questionRef && questionRef.current) {
        questionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [userAnswer]);

  return (
    <Wrapper userSelectAnswer={userAnswer.answer > 0} ref={questionRef}>
      <Title>{title}</Title>
      <SelectOptionContents>
        <TextContents>동의</TextContents>
        {SELECT_OPTION_DATA.map((data: SelectOptionProps) => {
          const { id, src, alt } = data;

          return (
            <SelectOption
              key={id}
              src={src}
              alt={alt}
              isSelect={id === userAnswer.answer}
              onClick={() => {
                onClickHandle(id);
              }}
            />
          );
        })}

        <TextContents>비동의</TextContents>
      </SelectOptionContents>
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperStyledProps>`
  width: 80%;
  height: 156px;
  margin-bottom: 156px;

  opacity: ${props => (props.userSelectAnswer ? 0.3 : 1.0)};

  transition: all 0.3s;
`;

const Title = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

const SelectOptionContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const TextContents = styled.div``;

const SelectOption = styled.img<SelectOptionStyledProps>`
  margin: 0 26px;

  border: ${props => (props.isSelect ? '1px solid black' : '1px solid seperate')};

  &:hover {
    cursor: pointer;
  }
`;

const SELECT_OPTION_DATA = [
  {
    id: 1,
    src: surveyF1,
    alt: 'surveyF1',
  },
  {
    id: 2,
    src: surveyF2,
    alt: 'surveyF2',
  },
  {
    id: 3,
    src: surveyF3,
    alt: 'surveyF3',
  },
  {
    id: 4,
    src: surveyF4,
    alt: 'surveyF4',
  },
  {
    id: 5,
    src: surveyF5,
    alt: 'surveyF5',
  },
  {
    id: 6,
    src: surveyF6,
    alt: 'surveyF6',
  },
  {
    id: 7,
    src: surveyF7,
    alt: 'surveyF7',
  },
];

export default Questions;
