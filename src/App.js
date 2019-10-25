import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Welcome from './pages/Home';
import Breeds from './pages/Breeds';

const Wrapper = styled.div`
  height: calc(100% - 175px - 100px);
  box-sizing: border-box;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Header></Header>
        <Navigation></Navigation>
        <Switch>
          <Route path="/breeds">
            <Breeds />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
