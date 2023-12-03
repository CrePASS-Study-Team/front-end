import React from 'react';
import styled from 'styled-components';
import Bar from './Bar';

interface BarColorArrayType {
  id: number;
  leftText: string;
  rightText: string;
  color: string;
  leftName: string;
  rightName: string;
}

interface mbtiPercentType {
  e: string;
  i: string;
  n: string;
  s: string;
  f: string;
  t: string;
  p: string;
  j: string;

  [key: string]: string;
}

const Graph = () => {
  // const e = '41%';
  // const i = '59%';
  // const n = '60%';
  // const s = '40%';
  // const f = '75%';
  // const t = '25%';
  // const p = '25%';
  // const j = '75%';

  const mbtiPersentData: mbtiPercentType = {
    e: '41%',
    i: '59%',
    n: '60%',
    s: '40%',
    f: '75%',
    t: '25%',
    p: '25%',
    j: '75%',
  };

  // const defaultColor = '#F0F0F0';

  const BAR_COLOR_ARRAY: BarColorArrayType[] = [
    {
      id: 1,
      leftText: 'E',
      rightText: 'I',
      color: '#4298B4',
      leftName: 'e',
      rightName: 'i',
    },
    {
      id: 2,
      leftText: 'N',
      rightText: 'S',
      color: '#E4ae3a',
      leftName: 'n',
      rightName: 's',
    },
    {
      id: 3,
      leftText: 'F',
      rightText: 'T',
      color: '#33A474',
      leftName: 'e',
      rightName: 't',
    },
    {
      id: 4,
      leftText: 'P',
      rightText: 'J',
      color: '#88619A',
      leftName: 'p',
      rightName: 'j',
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
            leftPercent={mbtiPersentData[data.leftName]}
            rightPercent={mbtiPersentData[data.rightName]}
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
