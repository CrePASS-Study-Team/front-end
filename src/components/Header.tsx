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
        <Contents onClick={() => naviagte('/teammembers')}>문의</Contents>
      </NaviContainer>
      <LanguageContents>언어</LanguageContents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  padding: 2rem;
`;

const Logo = styled.img`
  width: 45%;
  &:hover {
    cursor: pointer;
  }
`;

const NaviContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: gray;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border-top: 5px solid #ffc061;
  }
`;

const LanguageContents = styled(Contents)`
  padding: 2rem;
  font-weight: 500;
`;

export default Header;
