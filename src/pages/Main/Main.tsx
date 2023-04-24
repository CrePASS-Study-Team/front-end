import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <TitleContainer>
          <MainTitle>CHATGPT 로 확인하는 나의 MBTI 는?</MainTitle>
          <SubTitle>
            쉽고 간단하면서도 정확한 성격 유형 검사를 통해 당신이 누구이며, <br />왜 그러한 특정
            행동 성향을 보이는지 확인하십시오.
          </SubTitle>
        </TitleContainer>
        <ButtonContainer>
          <Button>검사 실시 {'->'} </Button>
        </ButtonContainer>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const MainContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 900;
`;

const SubTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  height: 500px;
`;

const Button = styled.button`
  background-color: #095ea5;
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
    width: 22rem;
    height: 6rem;
  }
`;

export default Main;
