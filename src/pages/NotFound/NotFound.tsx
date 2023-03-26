import React from 'react';
import styled from 'styled-components';
import pageNotFoundImage from '../../assets/notFound.png';

const NotFound = () => {
  return (
    <Wrap>
      <Contents>
        <ImageSection>
          <ErrorImage src={pageNotFoundImage} alt="page-not-found" />
        </ImageSection>
      </Contents>
    </Wrap>
  );
};

const Wrap = styled.div``;

const Contents = styled.div``;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorImage = styled.img`
  width: 55%;
  height: auto;
`;

export default NotFound;
