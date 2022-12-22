import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 0px 8px;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  font-family: Poppins;

  & .pokeball {
    align-items: center;
    height: 30px;
    width: 30px;
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
    margin-left: 20px;
  }

  .sort {
    display: flex;
    height: 32px;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
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
