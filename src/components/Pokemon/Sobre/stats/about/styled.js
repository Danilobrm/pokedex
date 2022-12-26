import styled from 'styled-components';

export const AboutArea = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 20px auto;
  align-items: center;

  p {
    color: #666666;
    font-size: 15px;
    height: fit-content;
  }

  .weight {
    display: flex;
    font-size: 18px;
    height: fit-content;
    flex-direction: column;
    align-items: center;

    & span {
      min-height: 100px;
      padding: 10px 40px;
    }
  }

  .height {
    display: flex;
    font-size: 18px;
    height: fit-content;
    border-right: 2px solid #e0e0e0;
    border-left: 2px solid #e0e0e0;
    flex-direction: column;
    align-items: center;

    & span {
      min-height: 100px;
      padding: 10px 40px;
    }
  }

  .moves {
    text-align: left;
    display: flex;
    height: fit-content;
    font-size: 18px;
    flex-direction: column;
    align-items: center;

    & span {
      min-height: 100px;
      padding: 10px 40px;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 13px;
      text-align: center;
      margin-top: -20px;
    }

    .weight {
      height: 100px;
      font-size: 15px;
      justify-content: space-between;

      & span {
        padding: 0 20px;
        & div {
          width: 100%;
        }
      }
    }

    .height {
      height: 100px;
      font-size: 15px;
      justify-content: flex-start;

      & span {
        padding: 0 20px;

        & div {
          width: 100%;
        }
      }
    }

    .moves {
      height: 100px;
      font-size: 15px;
      justify-content: space-between;

      & span {
        width: fit-content;
        padding: 0 20px;
        display: flex;
        flex-direction: column;

        & div {
          width: 100%;
        }
      }
    }
  }
`;

export const BodyData = styled.div`
  display: flex;
`;
