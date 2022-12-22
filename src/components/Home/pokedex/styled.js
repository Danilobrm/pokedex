import styled from 'styled-components';

export const PokedexStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: fit-content;
  transition: 0.3s ease-in-out;

  .pokemon-card {
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

    & .id {
      width: 80%;
      padding: 10px 0;
      align-items: center;
      text-align: right;
    }

    & img {
      width: 150px;
      height: 150px;
    }

    & h1 {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
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

    @media (max-width: 768px) {
      width: 130px;
      & img {
        width: 60px;
        height: 60px;
      }
      & h1 {
        font-size: 15px;
        height: 30px;
      }
      margin: 5px;
    }
  }

  @media (max-width: 768px) {
    transition: 0.3s ease-in-out;
    margin: 0 auto;
  }
`;
