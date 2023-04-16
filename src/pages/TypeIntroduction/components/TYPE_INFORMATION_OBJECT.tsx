// import AnalystBottomLine from '../../../assets/AnalystBottomLine.png';
// import DiplomatBottomLine from '../../../assets/DiplomatBottomLine.png';
// import ExplorerBottomLine from '../../../assets/ExplorerBottomLine.png';
// import ManagerBottomLine from '../../../assets/ManagerBottomLine.png';

interface TypeData {
  id: number;
  name: string;
  class: string;
  info: string;
}

interface TypeInformation {
  Analyst: TypeData[];
  Diplomat: TypeData[];
  Manager: TypeData[];
  Explorer: TypeData[];
  [key: string]: TypeData[];
}

export const TYPE_INFOMATION_OBJECT: TypeInformation = {
  // Analyst, Diplomat, Manager, Explorer
  Analyst: [
    {
      id: 1,
      name: '전략가',
      class: 'INTJ_A / INTJ-T',
      info: '모든일에 대해 계획을 세우며 상상력이 풍부한 전력가 입니다.',
    },
    {
      id: 2,
      name: '논리술사',
      class: 'INTP_A / INTP-T',
      info: '지식을 끝없이 갈망하는 혁신적인 발명가입니다.',
    },
    {
      id: 3,
      name: '통솔자',
      class: 'ENTJ_A / ENTJ-T',
      info: '항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다.',
    },
    {
      id: 4,
      name: '전략가',
      class: 'ENTP_A / ENTP-T',
      info: '지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다.',
    },
  ],
  Diplomat: [
    {
      id: 1,
      name: '옹호자',
      class: 'INFJ_A / INFJ-T',
      info: '모든일에 대해 계획을 세우며 상상력이 풍부한 전력가 입니다.',
    },

    {
      id: 2,
      name: '중재자',
      class: 'INFP_A / INFP-T',
      info: '지식을 끝없이 갈망하는 혁신적인 발명가입니다.',
    },
    {
      id: 3,
      name: '선도자',
      class: 'ENFJ_A / ENJ-T',
      info: '항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다.',
    },
    {
      id: 4,
      name: '활동가',
      class: 'ENFP_A / ENFP-T',
      info: '지적 도전을 즐기고 영리하고 호기심이 많은 사색가입니다.',
    },
  ],
  Manager: [
    {
      id: 1,
      name: '현실주의자',
      class: 'ISTJ_A / ISTJ-T',
      info: '모든일에 대해 계획을 세우며 상상력이 풍부한 전력가입니다.',
    },

    {
      id: 2,
      name: '수호자',
      class: 'ISFP_A / ISFP-T',
      info: '지식을 끝없이 갈망하는 혁신적인 발명가입니다.',
    },
    {
      id: 3,
      name: '경영자',
      class: 'ESTJ_A / ESTJ-T',
      info: '항상 문제 해결방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다.',
    },
    {
      id: 4,
      name: '집정가',
      class: 'ESJP_A / ESJP-T',
      info: '지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다.',
    },
  ],
  Explorer: [
    {
      id: 1,
      name: '장인',
      class: 'ISTJ_A / ISTJ-T',
      info: '모든 일에 대해 계획을 세우며 상상력이 풍부한 전력가입니다.',
    },

    {
      id: 2,
      name: '모험가',
      class: 'ISFP_A / ISFP-T',
      info: '지식을 끝없이 갈망하는 혁신적인 발명가입니다.',
    },
    {
      id: 3,
      name: '사업가',
      class: 'ESTP_A / ESTP-T',
      info: '항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자 입니다.',
    },
    {
      id: 4,
      name: '연예인',
      class: 'ESFP_A / ESFP-T',
      info: '지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다.',
    },
  ],
};
