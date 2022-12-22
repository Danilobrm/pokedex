import styled from 'styled-components';

export const PokedexStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: fit-content;
  transition: 0.3s ease-in-out;

  .pokemon-card {
    font-family: Poppins;
    text-decoration: none;
    margin: 10px;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    border-radius: 8px;
    border: 2px solid;
    box-shadow: 0px 0px 10px black;

    & .id {
      width: 80%;
      align-items: center;
      text-align: right;
    }

    & img {
      width: 160px;
      height: 160px;
    }

    & h1 {
      width: 100%;
      height: 50px;
      padding: 4px 8px 4px 8px;
      border-radius: 0 0 5px 5px;
      color: #fff;
      font-size: 25px;
      font-weight: 400;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      text-shadow: 0 0 5px black;
    }

    @media (max-width: 768px) {
      width: 130px;
      height: 130px;
      & img {
        width: 60px;
        height: 60px;
      }
      & h1 {
        font-size: 15px;
      }
      margin: 5px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    transition: 0.3s ease-in-out;
    justify-content: center;
    margin: 0 auto;
    border: 1px solid red;
  }
`;
