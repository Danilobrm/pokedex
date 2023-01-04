import styled from 'styled-components';

export const Sort = styled.nav`
  button {
    height: 60px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: fixed;
    z-index: 1;
    right: 0;
    top: 0;
    font-size: 20px;
    padding: 0 100px;
    & div {
      line-height: 12px;
      font-size: 13px;
      margin-left: 10px;
    }

    @media (max-width: 768px) {
      padding: 0 20px;
      & div {
        font-size: 10px;
      }
      & span {
        font-size: 20px;
      }
    }
  }
`;
