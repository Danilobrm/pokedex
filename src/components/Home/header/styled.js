import styled from 'styled-components';

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 3;

  & .pokeball {
    align-items: center;
    height: 30px;
    width: 30px;
    padding: 0 20px;
  }

  .logo {
    line-height: 32px;
    width: 100%;
    text-decoration: none;
    font-size: 34px;
    cursor: pointer;
    color: #212121;
    font-weight: 700;
    height: 32px;
    padding: 0 20px;
  }

  .sort {
    display: flex;
    height: 32px;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
    border: none;
    z-index: 3;
    background: transparent;
    padding: 0 20px;
    position: relative;
  }

  .sort-nav {
    width: fit-content;
    height: 100%;
    right: 0;
    z-index: 1;
    top: 0;
    display: flex;
    position: absolute;

    & span {
      display: none;
      font-size: 15px;
      z-index: 3;
      color: #fff;
      position: relative;

      & button {
        border: none;
        background-color: none;
        margin: 0;
        font-weight: 700;
        font-size: 20px;
        background: transparent;
        cursor: pointer;
        color: #fff;

        @media (max-width: 768px) {
          font-size: 15px;
        }
      }
    }
  }
  .sort-nav.active {
    align-items: flex-start;
    justify-content: center;
    width: fit-content;
    background: rgba(0, 0, 0, 0.7);

    & span {
      display: flex;
      margin-top: 60px;
      flex-direction: column;

      & button {
        margin: 10px;
      }
    }
  }
`;
