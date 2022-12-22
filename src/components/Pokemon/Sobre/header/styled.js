import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  font-weight: 700;
  font-size: 30px;
  margin: 0 auto;
  color: #fff;
  padding: 20px 0;
  position: relative;
  z-index: 2;
  align-items: center;

  a {
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
