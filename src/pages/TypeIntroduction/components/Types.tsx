import React from 'react';
import styled from 'styled-components';
import { TYPE_INFOMATION_OBJECT } from './TYPE_INFORMATION_OBJECT';
import somdangGIF from '../../../assets/mbti/somdang.gif';

interface TypesProps {
  type: string;
}

interface MapDataType {
  id: number;
  name: string;
  class: string;
  info: string;
  src: string;
}

const Types = (props: TypesProps) => {
  const { type } = props;

  const srcHandle = (name: string, data: MapDataType) => {
    if (name === '전략가') {
      return somdangGIF;
    } else {
      return data.src;
    }
  };

  return (
    <>
      {TYPE_INFOMATION_OBJECT[type].map((data: MapDataType) => {
        return (
          <TypeInfo key={data.id}>
            <TypeImage src={srcHandle(data.name, data)} alt={data.name} />
            <TypeName>{data.name}</TypeName>
            <ClassName>{data.class}</ClassName>
            <TypeIntroduce>{data.info}</TypeIntroduce>
          </TypeInfo>
        );
      })}
    </>
  );
};

const TypeInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 600px;
`;

const TypeImage = styled.img`
  width: 300px;
  height: 300px;
  z-index: 99;
`;

const TypeName = styled.div`
  padding-top: 1rem;
  font-size: 2rem;
  font-weight: 700;
  color: black;
`;

const ClassName = styled.div`
  padding-top: 1rem;
  font-size: 1rem;
  color: black;
`;

const TypeIntroduce = styled.div`
  padding-top: 1rem;
  font-size: 1rem;
  color: black;
  opacity: 0.7;
`;

export default Types;
