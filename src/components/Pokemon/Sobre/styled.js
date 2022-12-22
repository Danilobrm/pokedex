import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  margin: 0 auto;
  width: 100vw;
  height: fit-content;
  z-index: 0;

  .backgroundPokeball {
    opacity: 0.2;
    position: fixed;
    right: 0;
    top: -50px;
    z-index: 0;
  }

  .pokemon {
    display: flex;
    margin: 0 auto;
    width: 300px;
    z-index: 1;
    position: relative;
    top: 50px;
  }

  @media (max-width: 768px) {
    height: 100vh;
    .backgroundPokeball {
      width: 400px;
      top: 0;
      right: -100px;
    }

    .pokemon {
      width: 250px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  font-weight: 700;
  font-size: 30px;
  margin: 0 auto;
  color: white;
  padding: 20px 0;
  position: relative;
  z-index: 2;

  a:visited {
    color: #fff;
  }

  span {
    display: flex;
    align-items: center;

    & h1 {
      font-size: 30px;
      margin-left: 20px;
    }
  }

  @media (max-width: 768px) {
    font-size: 25px;
    span {
      & h1 {
        margin-left: 2px;
      }
    }
  }
`;

export const Stats = styled.div`
  z-index: 1;
  display: flex;
  margin: 0 auto;
  width: 96%;
  height: fit-content;
  background: #fff;
  padding: 56px 20px 0px;
  border-radius: 8px;
  flex-direction: column;

  .types {
    display: flex;
    margin: 20px auto;
    width: fit-content;
    height: fit-content;
  }

  .type {
    margin: 0 20px;
    border-radius: 10px;
    padding: 4px 10px;
    color: white;
    font-size: 25px;
  }

  .about {
    font-size: 20px;
    width: 100%;
    margin: 20px auto;

    & h2 {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .type {
      font-size: 20px;
    }

    .about {
      font-size: 18px;
    }
  }
`;

export const AboutArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px auto;
  text-align: center;
  align-items: center;

  p {
    color: #666666;
    font-size: 15px;
    height: fit-content;
  }

  .weight {
    display: flex;
    font-size: 18px;
    height: 150px;
    flex-direction: column;
    padding: 30px 50px 0 0;

    & span {
      min-height: 70px;
    }
  }

  .height {
    display: flex;
    font-size: 18px;
    height: 150px;
    border-right: 2px solid #e0e0e0;
    border-left: 2px solid #e0e0e0;
    flex-direction: column;
    padding: 30px 50px;

    & span {
      min-height: 70px;
    }
  }

  .moves {
    text-align: left;
    display: flex;
    height: 150px;
    font-size: 18px;
    flex-direction: column;
    padding: 30px 0 0 50px;

    & span {
      min-height: 70px;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 13px;
      text-align: center;
      margin-top: 0;
    }

    .weight {
      height: 100px;
      width: 100%;
      font-size: 15px;
      padding: 30px 10px 0 0;
      justify-content: space-between;

      & span {
        height: 100px;
      }
    }

    .height {
      height: 100px;
      width: 100%;
      font-size: 15px;
      padding: 30px 25px;
      justify-content: flex-start;

      & span {
        height: 100px;
      }
    }

    .moves {
      height: 100px;
      width: 100%;
      font-size: 15px;
      padding: 30px 0 0 10px;
      justify-content: space-between;
      & span {
        height: 100px;
      }
    }
  }
`;
