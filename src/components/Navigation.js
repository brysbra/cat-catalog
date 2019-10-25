import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: #09d3ac;
`;

const StyledNavigationItems = styled(Link)`
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavigationItems to="/">Home</StyledNavigationItems>
      <StyledNavigationItems to="/breeds">Breeds</StyledNavigationItems>
    </StyledNavigation>
  );
};

export default Navigation;
