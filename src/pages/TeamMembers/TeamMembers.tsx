import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import ContactUs from './components/ContactUs';
import Members from './components/Members';

const TeamMembers = () => {
  return (
    <TeamMembersWrapper>
      <Header />
      <ContactUs />
      <Members />
    </TeamMembersWrapper>
  );
};

const TeamMembersWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  background-color: #fff3d6;
`;

export default TeamMembers;
