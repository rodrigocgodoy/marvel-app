import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  background: #202020;
  color: #fff;
  padding: 0 30px;
  font-size: 20px;

  /* @media (max-width: 480px) {
    height: 30px;
  } */

  img {
    height: 100%;
  }

  svg {
    flex: 0.5;
    color: #000;
    cursor: pointer;
    height: 15px;
    margin: 0 5px;
    padding: 0;

    path {
      margin: 0;
      padding: 0;
    }
  }

  .containerSearch {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 250px;
    background-color: #fff;
    border-radius: 5px;
    padding: 3px;

    * {
      background: transparent;
      border: none;
    }

    input {
      flex: 3;
      padding: 0 0 0 10px;
      border: none;
      border-radius: 5px;
      height: 100%;
      font-size: 15px;
      background: #fff;
    }
  }
`;
