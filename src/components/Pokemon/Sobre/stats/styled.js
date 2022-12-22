import styled from 'styled-components';

export const StatsStyle = styled.div`
  z-index: 1;
  margin: 0 auto;
  width: 98%;
  background: #fff;
  border-radius: 8px;
  flex-direction: column;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  .types {
    display: flex;
    margin: 40px auto;
    width: fit-content;
  }

  .type {
    margin: 20px 20px 0 20px;
    border-radius: 10px;
    padding: 4px 10px;
    color: white;
    font-size: 25px;
    z-index: 1;
  }

  .about {
    font-size: 20px;
    width: 100%;
    margin: 20px auto 0 auto;

    & h2 {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .type {
      font-size: 20px;
    }

    .about {
      font-size: 15px;
    }
  }
`;
