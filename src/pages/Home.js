import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  background: #f7f7f7;
  height: 100%;
  box-sizing: border-box;
  padding-top: 5rem;
`;

const Loading = styled.div`
  color: #282c34;
  font-size: 3rem;
  font-weight: bold;
`;

const Img = styled.img`
  max-height: 75%;
  max-width: 75%;
`;

class Home extends React.Component {
  state = {
    loading: true,
    randomCat: null
  };

  async componentDidMount() {
    this.getCats();
  }

  async getCats() {
    const response = await axios.get(
      'https://api.thecatapi.com/v1/images/search'
    );
    const randomCat = response.data[0];
    this.setState({
      randomCat,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Wrapper>
          <Loading>Loading...</Loading>
        </Wrapper>
      );
    }

    const { randomCat } = this.state;
    return (
      <Wrapper>
        <Img src={randomCat.url}></Img>
      </Wrapper>
    );
  }
}

export default Home;
