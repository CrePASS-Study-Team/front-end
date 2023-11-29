import React from 'react';
import styled from 'styled-components';
import { TYPE_INFOMATION_OBJECT } from './MBTI_INFO';

interface MbitProps {
  mbtiKey: string;
}

const Mbti = (props: MbitProps) => {
  // const { mbtiKey } = props;

  const mbtiKey = 'INFJ';

  return (
    <Contents>
      <ContextTopBG />
      <ContentBottomBG />
      <Subtitle>당신의 성격 유형은</Subtitle>
      <Title>{TYPE_INFOMATION_OBJECT[mbtiKey].name}</Title>
      <KindOfMBTI>{mbtiKey}</KindOfMBTI>
      <MbtiImage src={TYPE_INFOMATION_OBJECT[mbtiKey].src} alt={mbtiKey} />
      <InfoOfMBTI>{TYPE_INFOMATION_OBJECT[mbtiKey].info}</InfoOfMBTI>
      <Button>확인</Button>
    </Contents>
  );
};

const Contents = styled.div`
  position: relative;

  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 878px;
  height: 800px;

  border-radius: 15px;

  background-color: white;
  padding: 10px;

  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;

const ContextTopBG = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  height: 50%;
  border-top-right-radius: 15px;
  background-color: #f2f2f2;

  z-index: 1;
`;

const ContentBottomBG = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;

  height: 50%;
  border-bottom-right-radius: 15px;
  background-color: white;

  z-index: 1;
`;

const Subtitle = styled.div`
  margin-bottom: 30px;

  font-size: 20px;
  font-weight: 600;

  z-index: 2;
`;

const Title = styled.div`
  margin-bottom: 30px;

  font-size: 56px;
  font-weight: 700;

  z-index: 2;
`;

const KindOfMBTI = styled.div`
  margin-bottom: 30px;

  font-size: 38px;
  font-weight: 600;

  color: green;

  z-index: 2;
`;

const InfoOfMBTI = styled.div`
  margin-top: 80px;

  font-size: 16px;

  font-weight: 600;

  z-index: 2;
`;

const MbtiImage = styled.img`
  width: 300px;
  height: 300px;

  z-index: 2;
`;

const Button = styled.button`
  margin-top: 40px;

  width: 180px;
  height: 50px;

  border-radius: 30px;

  font-weight: 700;
  font-size: 18px;

  background-color: #095ea5;
  color: white;
  border: 0;

  z-index: 2;
`;

export default Mbti;
