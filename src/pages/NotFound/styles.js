import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
  overflow-x: hidden;
  overflow-y: scroll;

  height: calc(100% - 120px);
  width: 100%;

  img {
    flex: 2;
    height: 60%;
  }

  div.containerMessage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    flex: 1;
    height: 100%;

    button[type='button'] {
      background-color: #ee171f;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      color: #fff;
      margin-top: 40px;
      width: 200px;
      height: 40px;
      outline: none;
      font-size: 18px;
    }
  }
`;
