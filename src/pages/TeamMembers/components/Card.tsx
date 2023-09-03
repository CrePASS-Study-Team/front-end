import React from 'react';
import styled from 'styled-components';
import { CardProps } from './types';

const Card = (props: CardProps) => {
  const { name, mbti, src, alt, position, env, tool, email } = props;

  return (
    <CardWrapper>
      <NameContents>{name}</NameContents>
      <MBTIContents>
        MBTI :<div>{mbti}</div>
      </MBTIContents>
      <ImageContents src={src} alt={alt} />
      <PositionContents>{position}</PositionContents>
      <EtcContents>Env : {env}</EtcContents>
      <EtcContents>Tool : {tool}</EtcContents>
      <EtcContents>Email : {email}</EtcContents>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 425px;
  background-color: white;
  padding: 3rem 15px;
  border-radius: 15px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
`;

const NameContents = styled.div`
  text-align: left;
  margin-top: 5px;
  font-size: 28px;
  font-weight: 700;
`;

const MBTIContents = styled(NameContents)`
  display: flex;
  flex-direction: row;

  div {
    color: #4fa986;
    margin-left: 10px;
  }
`;

const ImageContents = styled.img`
  margin: 3rem 0;
  width: 200px;
  height: 200px;
`;

const PositionContents = styled(NameContents)`
  font-size: 36px;
  margin-bottom: 1.5rem;
`;

const EtcContents = styled(NameContents)``;

export default Card;
