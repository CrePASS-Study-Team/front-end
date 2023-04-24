import React from 'react';
import styled from 'styled-components';
import { TYPE_INFOMATION_OBJECT } from './TYPE_INFORMATION_OBJECT';

interface TypesProps {
  type: string;
}

interface MapDataType {
  id: number;
  name: string;
  class: string;
  info: string;
}

const Types = (props: TypesProps) => {
  const { type } = props;
  return (
    <>
      {TYPE_INFOMATION_OBJECT[type].map((data: MapDataType) => {
        return (
          <TypeInfo key={data.id}>
            <TypeImage />
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

const TypeImage = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(60, 60, 60, 0.22);
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
`;

export default Types;
