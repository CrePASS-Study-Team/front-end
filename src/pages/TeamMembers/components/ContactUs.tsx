import React from 'react';
import styled from 'styled-components';
import ContactBottomLine from '../../../assets/teamMembersBottom.png';

const ContactUs = () => {
  return (
    <div>
      <ContactContents>
        <ContactTitle>문의</ContactTitle>
        <ContactText>
          궁금하신 사항이나 문의사항이 있으시면 망설임 없이 연락 주시기 바랍니다. 저희는 저희 앞으로
          발송되는 모든 문의 사항들을 하나하나 꼼꼼히 확인합니다. 당신의 소중한 의견 기다리고
          있겠습니다. 현재 영어로 작성된 이메일에 한해서만 답변이 가능합니다. 이 점 많은 양해
          부탁드립니다.
        </ContactText>
        <ContactInfo>CST@crepass.com</ContactInfo>
        <ContactInfo>크레파스솔루션</ContactInfo>
        <ContactInfo>서울특별시 종로구 종로1길 42 이마빌딩 12층</ContactInfo>
      </ContactContents>
      <BottomLine src={ContactBottomLine} alt="bottomline" />
    </div>
  );
};

const ContactContents = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 100%;
  padding: 90px 15% 150px 15%;

  background-color: #ff6187;
`;

const ContactTitle = styled.div`
  font-size: 63px;
  font-weight: 900;
  color: #ffffff;
`;

const ContactText = styled.div`
  margin-top: 5rem;
  font-size: 22px;
  font-weight: 900;
  color: #ffffff;
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
`;

const BottomLine = styled.img`
  width: 100%;
`;

export default ContactUs;
