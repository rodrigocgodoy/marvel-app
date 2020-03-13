import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px 100px;
  overflow-x: hidden;
  overflow-y: scroll;

  height: calc(100% - 120px);
  width: 100%;
  font-size: 30px;
`;
