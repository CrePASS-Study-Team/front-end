import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import surveyF1 from '../../../assets/survey/surveyF1.png';
import surveyF2 from '../../../assets/survey/surveyF2.png';
import surveyF3 from '../../../assets/survey/surveyF3.png';
import surveyF4 from '../../../assets/survey/surveyF4.png';
import surveyF5 from '../../../assets/survey/surveyF5.png';
import surveyF6 from '../../../assets/survey/surveyF6.png';
import surveyF7 from '../../../assets/survey/surveyF7.png';
import surveyT1 from '../../../assets/survey/surveyT1.png';
import surveyT2 from '../../../assets/survey/surveyT2.png';
import surveyT3 from '../../../assets/survey/surveyT3.png';
import surveyT4 from '../../../assets/survey/surveyT4.png';
import surveyT5 from '../../../assets/survey/surveyT5.png';
import surveyT6 from '../../../assets/survey/surveyT6.png';
import surveyT7 from '../../../assets/survey/surveyT7.png';

interface QuestionsProps {
  question: string;
  questionId: number;
  userSelectArray: any[];
  setUserSelectArray: React.Dispatch<React.SetStateAction<any[]>>;
  surveyId: string;
}

interface SelectOptionProps {
  id: number;
  src: string;
  alt: string;
  selectedSrc: string;
}

interface UserInputProps {
  id: number;
  answer: number;
}

type WrapperStyledProps = {
  userSelectAnswer: boolean;
};

const Questions = (props: QuestionsProps) => {
  const { question, questionId, userSelectArray, setUserSelectArray } = props;
  const questionRef = useRef<HTMLDivElement>(null); // ref 생성

  const [userAnswer, setUserAnswer] = useState<UserInputProps>({ id: questionId, answer: 0 });

  const onClickHandle = (option: number) => {
    const options = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    if (option >= 1 && option <= 7) {
      const updatedArray = userSelectArray.map(item => {
        if (item.id === questionId) {
          return { ...item, answer: options[option - 1] };
        }
        return item;
      });
      setUserAnswer({ ...userAnswer, answer: option });
      setUserSelectArray(updatedArray);
    } else {
      console.error('Invalid option provided');
    }
  };

  useEffect(() => {
    if (userAnswer.answer > 0) {
      if (questionRef && questionRef.current) {
        questionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [userAnswer]);

  console.log(userSelectArray);

  return (
    <Wrapper userSelectAnswer={userAnswer.answer > 0} ref={questionRef}>
      <Title>{question}</Title>
      <SelectOptionContents>
        <TextContents>동의</TextContents>
        {SELECT_OPTION_DATA.map((data: SelectOptionProps) => {
          const { id, src, alt, selectedSrc } = data;

          return (
            <>
              {id === userAnswer.answer ? (
                <SelectOption
                  key={id}
                  src={selectedSrc}
                  alt={alt}
                  onClick={() => {
                    onClickHandle(id);
                  }}
                />
              ) : (
                <SelectOption
                  key={id}
                  src={src}
                  alt={alt}
                  onClick={() => {
                    onClickHandle(id);
                  }}
                />
              )}
            </>
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

const SelectOption = styled.img`
  margin: 0 26px;

  &:hover {
    cursor: pointer;
  }
`;

const SELECT_OPTION_DATA = [
  {
    id: 1,
    src: surveyF1,
    alt: 'surveyF1',
    selectedSrc: surveyT1,
  },
  {
    id: 2,
    src: surveyF2,
    alt: 'surveyF2',
    selectedSrc: surveyT2,
  },
  {
    id: 3,
    src: surveyF3,
    alt: 'surveyF3',
    selectedSrc: surveyT3,
  },
  {
    id: 4,
    src: surveyF4,
    alt: 'surveyF4',
    selectedSrc: surveyT4,
  },
  {
    id: 5,
    src: surveyF5,
    alt: 'surveyF5',
    selectedSrc: surveyT5,
  },
  {
    id: 6,
    src: surveyF6,
    alt: 'surveyF6',
    selectedSrc: surveyT6,
  },
  {
    id: 7,
    src: surveyF7,
    alt: 'surveyF7',
    selectedSrc: surveyT7,
  },
];

export default Questions;
