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

  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: #202020;
    color: #fff;
    border-radius: 15px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #fff;
    }

    .profileContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 9;
      width: 100%;
      height: 100%;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-align: center;

        img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
        }
        span,
        p {
          color: #fff;
          margin-top: 20px;
        }
        span {
          font-size: 12px;
        }
        .title-name {
          font-size: 25px;
        }
      }
    }
  }

  .series {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex: 2;
    background-color: #fff;
    color: #202020;
    border-radius: 15px;
    margin-left: 5px;
    border: 1px solid #202020;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #202020;
    }

    .serieContent {
      flex: 9;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      overflow-x: hidden;

      ::-webkit-scrollbar {
        width: 12px;
      }

      ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 50px;
        background: rgba(20, 20, 20, 0.5);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
