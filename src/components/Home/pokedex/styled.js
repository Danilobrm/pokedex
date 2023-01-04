import styled from 'styled-components';

export const PokedexStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: fit-content;
  transition: 0.3s ease-in-out;

  & a {
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 250px;
    height: fit-content;
    align-items: center;
    border-radius: 8px;
    border: 2px solid;
    box-shadow: 0px 0px 3px black;
    text-decoration: none;
    z-index: 0;

    & span {
      display: flex;
      width: 100%;
      justify-content: space-between;
      & div:nth-child(1) {
        position: relative;
        border-radius: 30px;
        padding: 5px;
        z-index: 1;
        position: relative;
        font-size: 50px;
      }
      & div:nth-child(2) {
        display: flex;
        align-items: center;
        text-align: right;
        padding: 0 20px;
      }
    }

    & img {
      width: 130px;
      height: 130px;
    }

    & h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      border-radius: 0 0 5px 5px;
      color: #fff;
      font-size: 25px;
      font-weight: 400;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      text-shadow: 0 0 5px black;
    }
  }

  @media (max-width: 768px) {
    transition: 0.3s ease-in-out;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);

    & a {
      width: 104px;
      height: 112px;
      align-items: center;
      & span {
        height: 16px;
        & div:nth-child(1) {
          position: relative;
          padding: 10px 5px;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        & div:nth-child(2) {
          font-size: 8px;
          padding: 10px 5px;
        }
      }
      & img {
        width: 72px;
        height: 72px;
      }
      & h1 {
        font-size: 10px;
        height: 24px;
      }
      margin: 5px;
    }
  }
`;
