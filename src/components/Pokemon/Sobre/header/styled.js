import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 32px;
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
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;

    & h1 {
      font-size: 30px;
      margin-left: 25px;
    }
  }

  @media (max-width: 768px) {
    span {
      & h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
      }
    }
    div {
      font-weight: 700;
      font-size: 12px;
      line-height: 32px;
    }
  }
`;
