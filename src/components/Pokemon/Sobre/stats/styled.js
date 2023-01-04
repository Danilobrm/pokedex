import styled from 'styled-components';

export const StatsStyle = styled.div`
  z-index: 1;
  margin: 0 auto;
  width: 90%;
  background: #fff;
  border-radius: 8px;
  flex-direction: column;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 0 0 10px 0;

  button {
    display: flex;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    cursor: pointer;
    background: none;
    font-size: 40px;
    border: none;
    padding: 0 0 10px 0;
  }

  & .types {
    display: flex;
    margin: 10px auto;
    width: fit-content;
    & .type {
      margin: 40px 10px 0 10px;
      border-radius: 10px;
      padding: 4px 10px;
      color: white;
      font-size: 25px;
      z-index: 1;
    }
  }

  & .about {
    font-size: 20px;
    width: 100%;
    & h2 {
      height: 16px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    button {
      font-size: 30px;
    }
    & .types {
      & .type {
        font-size: 20px;
        padding: 2px 8px;
        width: 46px;
        height: 20px;
        font-weight: 700;
        font-size: 10px;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    & .about {
      h2 {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
`;
