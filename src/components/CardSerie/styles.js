import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 15px;

  width: 350px;
  height: 100px;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 0 rgba(121, 130, 130, 0.55);

  a {
    text-decoration: none;
  }

  .imgContainer {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 0 0 5px;
    }
  }

  .nameContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    width: 100%;
    text-align: center;

    span {
      text-decoration: none;
      color: #000;
    }
  }
`;
