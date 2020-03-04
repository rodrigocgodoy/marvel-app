import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 50px;
  background: #202020;
  color: #fff;
  font-size: 15px;

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    a {
      color: #fff;
    }
  }

  .redes-sociais {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    width: 170px;
    height: 100%;

    a svg {
      cursor: pointer;
      color: #fff;
    }
  }
`;
