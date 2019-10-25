import React from 'react';
import styled from 'styled-components';
import catLogo from './cat.png';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 175px;
  width: 100%;
  background: #282c34;
  font-size: 5rem;
  color: #09d3ac;
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 70%;
`;

const Heading = styled.header`
  margin-left: 2rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <ImgContainer>
        <Img src={catLogo}></Img>
      </ImgContainer>
      <Heading>The Cat Catalog</Heading>
    </StyledHeader>
  );
};

export default Header;
