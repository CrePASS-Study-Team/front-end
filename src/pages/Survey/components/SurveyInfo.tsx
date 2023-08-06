import React from 'react';
import styled from 'styled-components';

interface SurveyInfoProps {
  backgroundColor: string;
  title: string;
}

type WrapperStyledProps = {
  backgroundColor: string;
};

const SurveyInfo = (props: SurveyInfoProps) => {
  const { backgroundColor, title } = props;

  return (
    <Wrapper backgroundColor={backgroundColor}>
      <SurveyIntroImage />
      <SurveyIntroText>{title}</SurveyIntroText>
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  height: 255px;

  border-radius: 8px;
  background-color: ${props => `${props.backgroundColor}`};
  margin-right: 30px;
`;

const SurveyIntroImage = styled.div`
  width: 90px;
  height: 90px;
  background-color: red;
  margin: 25px 0;

  z-index: 11;
`;

const SurveyIntroText = styled.div`
  margin-top: 10%;

  width: 70%;

  text-align: center;

  font-size: 17px;
  font-weight: 700;

  z-index: 12;
`;

export default SurveyInfo;
