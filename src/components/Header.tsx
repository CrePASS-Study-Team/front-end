import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/CRT_logo.png';

const Header = () => {
  const naviagte = useNavigate();

  return (
    <Wrapper>
      <LogoContainer>
        <Logo src={logo} alt="logo" onClick={() => naviagte('/')} />
      </LogoContainer>
      <NaviContainer>
        <Contents onClick={() => naviagte('/survey')}>성격 유형 검사</Contents>
        <Contents onClick={() => naviagte('/typeintroduction')}>성격 유형 </Contents>
        <Contents onClick={() => naviagte('/teammembers')}>Teams</Contents>
      </NaviContainer>
      <LanguageContents>언어</LanguageContents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  border-bottom: 1px solid black;
`;

const LogoContainer = styled.div``;

const Logo = styled.img`
  width: 45%;
`;

const NaviContainer = styled.div`
  display: flex;
`;

const Contents = styled.div`
  color: gray;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    font-size: 2rem;
  }
`;

const LanguageContents = styled(Contents)`
  font-weight: 500;
`;

export default Header;
