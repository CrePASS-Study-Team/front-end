import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import infj from '../../../assets/mbti/INFJ.png';
import istj from '../../../assets/mbti/ISTJ.png';
import entp from '../../../assets/mbti/ENTP.png';
import { CardProps } from './types';

const Members = () => {
  return (
    <MembersWrapper>
      <MembersContainer>
        <CardListContainer>
          {MEMBERS_DATA_ARRAY.map((data: CardProps) => (
            <Card
              key={data.id}
              id={data.id}
              name={data.name}
              mbti={data.mbti}
              src={data.src}
              alt={data.alt}
              position={data.position}
              env={data.env}
              tool={data.tool}
              email={data.email}
            />
          ))}
        </CardListContainer>
      </MembersContainer>
    </MembersWrapper>
  );
};

const MembersWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MembersContainer = styled.div`
  padding: 5rem;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const MEMBERS_DATA_ARRAY = [
  {
    id: 1,
    name: 'Hyunjun Jung',
    mbti: 'INFJ',
    src: infj,
    alt: 'infj',
    position: 'Front-End',
    env: 'Window11, Vscode',
    tool: 'React, TypeScript',
    email: 'hjjung@crepass.com',
  },
  {
    id: 2,
    name: 'Sangjun An',
    mbti: 'INFJ',
    src: infj,
    alt: 'infj',
    position: 'Back-End',
    env: 'Ubuntu22.04',
    tool: 'Python, FastApi',
    email: 'sjan@crepass.com',
  },
  {
    id: 3,
    name: 'Inwoo Kwon',
    mbti: 'ISTJ',
    src: istj,
    alt: 'istj',
    position: 'Back-End',
    env: 'Window11, Eclipse',
    tool: 'Spring boot, JAVA',
    email: 'iwkwon@crepass.com',
  },
  {
    id: 4,
    name: 'Gunhyeok Yoon',
    mbti: 'ENTP',
    src: entp,
    alt: 'entp',
    position: 'Design',
    env: 'Window11',
    tool: 'Figma, Illustrator',
    email: 'ghyoon@crepass.com',
  },
];

export default Members;
