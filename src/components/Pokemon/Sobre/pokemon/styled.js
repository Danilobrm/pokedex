import styled from 'styled-components';

export const Container = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;

  .backgroundPokeball {
    opacity: 0.2;
    position: fixed;
    right: 0;
    top: -50px;
    z-index: 0;
    width: 700px;
  }

  .pokemon {
    display: flex;
    margin: 0 auto;
    width: 300px;
    z-index: 1;
    position: relative;
    top: 30px;
  }

  @media (max-width: 768px) {
    height: 100%;
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
