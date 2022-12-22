import styled from 'styled-components';

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

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
    height: 150px;
    right: 0;
    z-index: 0;
    top: 50px;
    display: flex;
    position: absolute;

    & span {
      display: none;
      font-size: 15px;
      position: relative;
      z-index: 3;
      color: #fff;

      & button {
        border: none;
        background-color: none;
        transition: 0.3s ease-in-out;
        margin: 0;
        font-weight: 700;
        font-size: 20px;
        background: transparent;
        cursor: pointer;
        color: #fff;
      }
    }
  }
  .sort-nav.active {
    align-items: center;
    justify-content: center;

    & span {
      display: flex;
      flex-direction: column;

      & button {
        transition: 1s ease-in-out;
        margin: 10px;
      }
    }
  }
`;

export const Background = styled.input`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  overflow: hidden;

  &.active {
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
  }
`;

export const SearchBar = styled.input`
  font-family: Poppins;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 8px;
  gap: 16px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #e0e0e0;
  margin-bottom: 10px;

  &::placeholder {
    text-align: center;
  }
  &:focus {
    border: 1px solid black;
    &::placeholder {
      color: transparent;
    }
  }

  &:focus {
    &:placeholder-shown {
      text-align: left;
      color: black;
    }
  }
`;
