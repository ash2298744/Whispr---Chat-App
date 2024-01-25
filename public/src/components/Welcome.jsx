import React from 'react'
import Hello from '../assets/hello.gif';
import styled from 'styled-components';

const Welcome = ({currentUser}) => {
  return (
    <Container>
        <img src={Hello} alt="robot" />
        <h1>Welcome, <span>{currentUser.username}!</span></h1>
        <h3>Tap Chat to start messaging</h3>
    </Container>
  )
}

export default Welcome

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    img{
        height: 20rem;
    }
    span{
        color: #4e00ff;
    }

`;

