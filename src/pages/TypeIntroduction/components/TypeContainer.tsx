import React from 'react';
import styled from 'styled-components';
import Types from './Types';

interface TypeContainerProps {
  themeColor: string;
  type: string;
  typeText: string;
  bottomLine: string;
}

// Analyst, Diplomat, Manager, Explorer

const TypeContainer = (props: TypeContainerProps) => {
  const { themeColor, typeText, type, bottomLine } = props;

  return (
    <TypeContents style={{ background: themeColor }}>
      <TypeTitle>{typeText}</TypeTitle>
      <TypeInfoConatiner>
        <Types type={type} />
      </TypeInfoConatiner>
      <TypeBottomLine src={bottomLine} alt="bottomLine" />
    </TypeContents>
  );
};

const TypeContents = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  text-align: center;
  color: white;
  font-size: 12rem;
  font-weight: 700;
`;

const TypeTitle = styled.div`
  font-size: 12rem;
  font-weight: 700;
  color: white;
`;

const TypeInfoConatiner = styled.div`
  position: absolute;
  top: 25%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  width: 100%;
  border: 1px solid black;
`;

const TypeBottomLine = styled.img`
  ${({ theme }) => theme.common.bottomImage}
  top : 0;
  left: 0;
`;

export default TypeContainer;
