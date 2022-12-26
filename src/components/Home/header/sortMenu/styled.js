import styled from 'styled-components';

export const SortArea = styled.nav`
  .sort-nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    width: 300px;
    right: -300px;
    z-index: 1;
    transition: 0.3s ease-in-out;
    padding: 70px 10px;
    align-items: flex-start;
  }
  .sort-nav.active {
    background: rgba(0, 0, 0, 0.7);
    transition: 0.3s ease-in-out;
    right: 0;
    top: 0;
  }
`;
