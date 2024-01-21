import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import styled from 'styled-components';
import HeaderTopLine from '../../assets/HeaderBottomLine.png';
import mainImage from '../../assets/main.png';
import axios from 'axios';

const Main = () => {
  const navigate = useNavigate();

  const onClickSurveyButton = () => {
    navigate('/survey');
  };

  const apiCall = async () => {
    try {
      const response = await axios.post('https://h-fund.crepassplus.com/api/user/signin', {
        id: 'crepass',
        password: 'crepass',
      });

      if (response.data.code === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <Wrapper>
      <Header />
      <TopImage src={HeaderTopLine} alt="bottomLine" />
      <MainContainer>
        <TitleContainer>
          <MainTitleContents>
            <MainTitle>CTS검사가 너무 정확해 "살짝 소름이 돋을 정도예요"</MainTitle>
            <MainTitle>라고 성격 유형 검사를 마친 한 참여자는</MainTitle>
            <MainTitle>말했습니다.</MainTitle>
          </MainTitleContents>
          <SubTitle>
            쉽고 간단하면서도 정확한 성격 유형 검사를 통해 당신이 누구이며, <br />왜 그러한 특정
            행동 성향을 보이는지 확인하십시오.
          </SubTitle>
        </TitleContainer>
        <ButtonContainer>
          <Button onClick={onClickSurveyButton}>검사 실시 {'->'} </Button>
        </ButtonContainer>
        <MainImage style={{ backgroundImage: `url(${mainImage})` }} />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const TopImage = styled.img`
  width: 100%;
  margin-bottom: -5px;
`;

const MainImage = styled.div`
  position: absolute;
  top: 300px;
  left: 0;
  right: 0;
  height: 100%;
  background-size: cover;

  z-index: 0;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 100px;

  height: 100%;

  color: white;
  background-color: #ffc061;
`;

const TitleContainer = styled.div`
  z-index: 500;
`;

const MainTitleContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 2rem;
`;

const MainTitle = styled.div`
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

  z-index: 500;
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
    transform: scale(1.1); // 원래 크기의 1.1배로 확대
  }
`;

export default Main;
