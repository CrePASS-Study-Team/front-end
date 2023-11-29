import React from 'react';
import styled from 'styled-components';

interface BarColorArrayType {
  id: number;
  leftText: string;
  rightText: string;
  color: string;
}

interface BarProps {
  data: BarColorArrayType;
  leftPercent: string;
  rightPercent: string;
}

interface BarColorProps {
  bg: string;
}

const Bar = (props: BarProps) => {
  const { data, leftPercent, rightPercent } = props;

  const colorHandle = () => {
    if (leftPercent > rightPercent) return { leftColor: data.color, rightColor: '#F0F0F0' };
    else {
      return { leftColor: '#f0f0f0', rightColor: data.color };
    }
  };

  return (
    <BarWraper>
      <BarBox>
        <SpecificText>
          <SpecificMbti>{data.leftText}</SpecificMbti>
          <MbtiPercent>{leftPercent}</MbtiPercent>
        </SpecificText>
        <BarLeft bg={colorHandle()!.leftColor} />
        <BarRight bg={colorHandle()!.rightColor} />
        <SpecificTextRight>
          <SpecificMbti>{data.rightText}</SpecificMbti>
          <MbtiPercent>{rightPercent}</MbtiPercent>
        </SpecificTextRight>
      </BarBox>
    </BarWraper>
  );
};

const SpecificText = styled.div`
  margin-right: 10px;
`;

const SpecificTextRight = styled.div`
  margin-left: 10px;
`;

const SpecificMbti = styled.div`
  text-align: center;

  margin: 5px;

  font-size: 2rem;
  font-weight: 700;
`;

const MbtiPercent = styled.div`
  display: block;

  text-align: center;

  font-size: 1.5rem;
  font-weight: 700;
`;

const BarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 458px;
  height: 100px;
`;

const BarWraper = styled.div`
  width: 458px;
  height: 50px;

  z-index: 3;

  display: flex;

  margin-top: 80px;
`;

const BarRight = styled.div<BarColorProps>`
  width: 50%;
  height: 50px;

  background-color: ${props => props.bg || '#f0f0f0'};

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  z-index: 3;
`;

const BarLeft = styled.div<BarColorProps>`
  width: 50%;
  height: 50px;

  background-color: ${props => props.bg || '#f0f0f0'};

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  z-index: 3;
`;

export default Bar;
