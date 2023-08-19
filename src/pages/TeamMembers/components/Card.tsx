import React from 'react';
import styled from 'styled-components';
import { CardProps } from './types';

const Card = (props: CardProps) => {
  const { name, mbti, src, alt, position, env, tool, email } = props;

  return (
    <CardWrapper>
      <div>{name}</div>
      <div>{mbti}</div>
      <img src={src} alt={alt} />
      <div>{position}</div>
      <div>Env : {env}</div>
      <div>Tool : {tool}</div>
      <div>email : {email}</div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 400px;
  height: 700px;
  background-color: white;
`;

export default Card;
