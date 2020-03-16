import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  /* background: #202020; */
  color: #202020;
  padding: 0 30px;
  font-size: 20px;

  img {
    flex: 2;
    height: 80%;
  }

  div {
    flex: 1;
  }
`;
