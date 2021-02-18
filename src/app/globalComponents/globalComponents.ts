import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100vw;
  background-color: #11698e;
  padding: 20px;

  @media (min-width: 412px) {
    max-width: 375px;
    max-height: 812px;
    margin: 40px auto 40px auto;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  height: 25px;
  width: 100px;
  background-color: f8f1f1;
  border-radius: 5px;
  color: #11698e;

  &:hover {
    background-color: white;
  }
`;
