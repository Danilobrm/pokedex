import styled from 'styled-components';

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 3;

  & img {
    align-items: center;
    height: 30px;
    width: 30px;
    padding: 0 20px;
  }

  & a {
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

  @media (max-width: 768px) {
    & img {
      width: 24px;
      height: 24px;
      padding: 0;
    }

    & a {
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      height: 32px;
    }
  }
`;
