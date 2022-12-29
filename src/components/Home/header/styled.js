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
    position: fixed;
    right: 0;
    top: 20px;
  }
`;
