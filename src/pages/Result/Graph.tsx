import React from 'react';
import styled from 'styled-components';
import Bar from './Bar';

import { PercentageType } from './Result';

interface BarColorArrayType {
  id: number;
  leftText: string;
  rightText: string;
  color: string;
  leftName: string;
  rightName: string;
}

interface GraphProps {
  percentage: PercentageType;
}

const Graph = (props: GraphProps) => {
  const { percentage } = props;

  const BAR_COLOR_ARRAY: BarColorArrayType[] = [
    {
      id: 1,
      leftText: 'E',
      rightText: 'I',
      color: '#4298B4',
      leftName: 'E',
      rightName: 'I',
    },
    {
      id: 2,
      leftText: 'N',
      rightText: 'S',
      color: '#E4ae3a',
      leftName: 'N',
      rightName: 'S',
    },
    {
      id: 3,
      leftText: 'F',
      rightText: 'T',
      color: '#33A474',
      leftName: 'F',
      rightName: 'T',
    },
    {
      id: 4,
      leftText: 'P',
      rightText: 'J',
      color: '#88619A',
      leftName: 'P',
      rightName: 'J',
    },
  ];

  return (
    <BarWraper>
      <Title>결과</Title>
      <BarContenst>
        {BAR_COLOR_ARRAY.map((data: BarColorArrayType) => (
          <Bar
            key={data.id}
            data={data}
            leftPercent={percentage[data.leftName]}
            rightPercent={percentage[data.rightName]}
          />
        ))}
      </BarContenst>
    </BarWraper>
  );
};

const BarWraper = styled.div`
  position: relative;

  width: 878px;
  height: 800px;

  background-color: white;
  border-radius: 15px;

  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Title = styled.div`
  position: relative;

  text-align: center;

  font-size: 40px;

  font-weight: 700;

  color: black;

  z-index: 10;
`;

const BarContenst = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export default Graph;
