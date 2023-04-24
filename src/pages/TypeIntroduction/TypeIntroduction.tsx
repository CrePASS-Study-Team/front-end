import React from 'react';
import Header from '../../components/Header';
import TitleHeader from '../../components/TitleHeader';
import TypeContainer from './components/TypeContainer';
import AnalystBottomLine from '../../assets/AnalystBottomLine.png';
import DiplomatBottomLine from '../../assets/DiplomatBottomLine.png';
import ExplorerBottomLine from '../../assets/ExplorerBottomLine.png';
import ManagerBottomLine from '../../assets/ManagerBottomLine.png';

const TypeIntroduction = () => {
  return (
    <div>
      <Header />
      <TitleHeader title="성격 유형" src={AnalystBottomLine} />
      {TYPE_ARRAY.map(data => {
        return (
          <TypeContainer
            key={data.id}
            type={data.type}
            typeText={data.typeText}
            themeColor={data.themeColor}
            bottomLine={data.bottomLine}
          />
        );
      })}
    </div>
  );
};

const TYPE_ARRAY = [
  {
    id: 1,
    themeColor: '#E2E9FF',
    typeText: '분석가형',
    type: 'Analyst',
    bottomLine: DiplomatBottomLine,
  },
  {
    id: 1,
    themeColor: '#D5FFDB',
    typeText: '외교관형',
    type: 'Diplomat',
    bottomLine: ManagerBottomLine,
  },
  {
    id: 1,
    themeColor: '#CEFFFF',
    typeText: '관리자형',
    type: 'Manager',
    bottomLine: ExplorerBottomLine,
  },
  {
    id: 1,
    themeColor: '#FFF7B1',
    typeText: '탐험가형',
    type: 'Explorer',
    bottomLine: ExplorerBottomLine,
  },
];

export default TypeIntroduction;
