import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f7f7;
  height: 100%;
  box-sizing: border-box;
  padding-top: 2rem;
  overflow-y: scroll;
`;

const Loading = styled.div`
  color: #282c34;
  font-size: 3rem;
  font-weight: bold;
`;

const Card = styled.div`
  width: 75%;
  background: #282c34;
  color: #09d3ac;
  padding: 2rem;
  margin-bottom: 0.5rem;
`;

const Heading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: 1rem;
`;

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const getBreeds = async () => {
      const result = await axios('https://api.thecatapi.com/v1/breeds');
      setBreeds(result.data);
    };

    getBreeds();
  }, []);

  if (breeds.length === 0) {
    return (
      <Wrapper>
        <Loading>Loading...</Loading>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {breeds.map(breed => {
        return (
          <Card key={breed.id}>
            <Heading>{breed.name}</Heading>
            <Description>{breed.description}</Description>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default Breeds;
