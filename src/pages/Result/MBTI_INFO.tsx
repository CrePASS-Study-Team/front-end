import ENFJ from '../../assets/mbti/ENFJ.png';
import ENFP from '../../assets/mbti/ENFP.png';
import ENTJ from '../../assets/mbti/ENTJ.png';
import ENTP from '../../assets/mbti/ENTP.png';
import ESFJ from '../../assets/mbti/ESFJ.png';
import ESFP from '../../assets/mbti/ESFP.png';
import ESTJ from '../../assets/mbti/ESTJ.png';
import ESTP from '../../assets/mbti/ESTP.png';
import INFJ from '../../assets/mbti/INFJ.png';
import INFP from '../../assets/mbti/INFP.png';
import INTJ from '../../assets/mbti/INTJ.png';
import INTP from '../../assets/mbti/INTP.png';
import ISFJ from '../../assets/mbti/ISFJ.png';
import ISFP from '../../assets/mbti/ISFP.png';
import ISTJ from '../../assets/mbti/ISTJ.png';
import ISTP from '../../assets/mbti/ISTP.png';

interface TypeInfo {
  id: number;
  name: string;
  class: string;
  info: string;
  src: string; // 'src'의 실제 타입을 알 수 없으므로 임시로 'any'를 사용합니다. 실제 타입으로 교체해야 합니다.
}

type TypeInformation = {
  [key: string]: TypeInfo;
};

export const TYPE_INFOMATION_OBJECT: TypeInformation = {
  INTJ: {
    id: 1,
    name: '전략가',
    class: 'INTJ-A / INTJ-T',
    info: '모든일에 대해 계획을 세우며 상상력이 풍부한 전력가 입니다.',
    src: INTJ,
  },
  INTP: {
    id: 2,
    name: '논리술사',
    class: 'INTP-A / INTP-T',
    info: '지식을 끝없이 갈망하는 혁신적인 발명가입니다.',
    src: INTP,
  },
  ENTJ: {
    id: 3,
    name: '통솔자',
    class: 'ENTJ-A / ENTJ-T',
    info: '항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다.',
    src: ENTJ,
  },
  ENTP: {
    id: 4,
    name: '변론가',
    class: 'ENTP-A / ENTP-T',
    info: '지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다.',
    src: ENTP,
  },
  INFJ: {
    id: 1,
    name: '옹호자',
    class: 'INFJ-A / INFJ-T',
    info: '차분하고 신비한 분위기를 풍기는 성격으로, 다른 사람에게 의욕을 불어넣는 이상주의자입니다.',
    src: INFJ,
  },

  INFP: {
    id: 2,
    name: '중재자',
    class: 'INFP-A / INFP-T',
    info: '항상 선을 행할 준비가 되어 있는 부드럽고 친절한 이타주의자입니다.',
    src: INFP,
  },
  ENFJ: {
    id: 3,
    name: '선도자',
    class: 'ENFJ-A / ENJ-T',
    info: '청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는 지도자입니다.',
    src: ENFJ,
  },
  ENFP: {
    id: 4,
    name: '활동가',
    class: 'ENFP-A / ENFP-T',
    info: '열정적이고 창의적인 성격으로, 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼입니다.',
    src: ENFP,
  },

  ISTJ: {
    id: 1,
    name: '현실주의자',
    class: 'ISTJ-A / ISTJ-T',
    info: '사실을 중시하는 믿음직한 현실주의자입니다.',
    src: ISTJ,
  },

  ISFJ: {
    id: 2,
    name: '수호자',
    class: 'ISFJ-A / ISFJ-T',
    info: '주변 사람을 보호할 준비가 되어 있는 헌신적이고 따뜻한 수호자입니다.',
    src: ISFJ,
  },
  ESTJ: {
    id: 3,
    name: '경영자',
    class: 'ESTJ-A / ESTJ-T',
    info: '사물과 사람을 관리하는데 뛰어난 능력을 지닌 경영자입니다.',
    src: ESTJ,
  },
  ESFJ: {
    id: 4,
    name: '집정관',
    class: 'ESFJ-A / ESFJ-T',
    info: '배려심이 넘치고 항상 다른 사람을 도울 준비가 되어 있는 성격으로, 인기가 많고 사교성이 높은 마당발입니다.',
    src: ESFJ,
  },

  ISTP: {
    id: 1,
    name: '장인',
    class: 'ISTJ-A / ISTJ-T',
    info: '대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다.',
    src: ISTP,
  },

  ISFP: {
    id: 2,
    name: '모험가',
    class: 'ISFP-A / ISFP-T',
    info: '항상 새로운 경험을 추구하는 유연하고 매력 넘치는 예술가입니다.',
    src: ISFP,
  },
  ESTP: {
    id: 3,
    name: '사업가',
    class: 'ESTP-A / ESTP-T',
    info: '위험을 기꺼이 감수하는 성격으로, 영리하고 에너지 넘치며 관찰력이 뛰어난 사업가입니다.',
    src: ESTP,
  },
  ESFP: {
    id: 4,
    name: '연예인',
    class: 'ESFP-A / ESFP-T',
    info: '즉흥적이고 넘치는 에너지와 열정으로 주변 사람을 즐겁게 하는 연예인 입니다',
    src: ESFP,
  },
};

interface MbtiBgType {
  INTJ: string;
  INTP: string;
  ENTJ: string;
  ENTP: string;
  INFJ: string;
  INFP: string;
  ENFJ: string;
  ENFP: string;
  ISTJ: string;
  ISFJ: string;
  ESTJ: string;
  ESFJ: string;
  ISTP: string;
  ISFP: string;
  ESTP: string;
  ESFP: string;
  [key: string]: string;
}

export const MBTI_BACKGROUND_OBJECT: MbtiBgType = {
  INTJ: '#E2E9FF',
  INTP: '#E2E9FF',
  ENTJ: '#E2E9FF',
  ENTP: '#E2E9FF',
  INFJ: '#D4FFDB',
  INFP: '#D4FFDB',
  ENFJ: '#D4FFDB',
  ENFP: '#D4FFDB',
  ISTJ: '#CEFFFF',
  ISFJ: '#CEFFFF',
  ESTJ: '#CEFFFF',
  ESFJ: '#CEFFFF',
  ISTP: '#FFF7B1',
  ISFP: '#FFF7B1',
  ESTP: '#FFF7B1',
  ESFP: '#FFF7B1',
};
