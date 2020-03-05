import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;

  width: 200px;
  min-height: 300px;
  font-size: 14px;
  /* border: 1px solid #000; */
  border-radius: 5px;
  /* -webkit-box-shadow: 6px 6px 7px -1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 6px 6px 7px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 6px 6px 7px -1px rgba(0, 0, 0, 0.5); */
  box-shadow: 2px 2px 4px 0 rgba(121, 130, 130, 0.55);

  .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1.5;

    img {
      width: 90%;
      height: 100%;
    }
  }

  .nameContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
  }
`;
