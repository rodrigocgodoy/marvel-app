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

  .containerSeacrhClosed {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 300px;

    input {
      visibility: hidden;
    }
  }

  .containerSeacrhOn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 300px;

    input {
      flex: 1;
      padding: 0 30px 0 10px;
      border: none;
      border-radius: 5px;
      height: 100%;
      font-size: 15px;
    }
  }

  svg {
    flex: 0.5;
    color: #fff;
    cursor: pointer;
    height: 25px;
    /* font-size: 20px; */
    margin: 0;
    padding: 0;

    path {
      /* font-size: 20px; */
      margin: 0;
      padding: 0;
    }
  }
`;
