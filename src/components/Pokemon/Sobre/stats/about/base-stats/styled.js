import styled from 'styled-components';

export const BaseStatsStyle = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 50px;

  .stats {
    align-items: center;
    display: flex;
    width: 50%;
    margin: 0 auto;
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    & div:first-child {
      font-weight: 700;
      line-height: 16px;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: right;
      margin-left: 20px;
    }

    & .vertical-line {
      border-right: 2px solid #e0e0e0;
      padding: 0 10px;
      height: 50px;
    }

    & div:nth-child(3) {
      width: 70px;
      display: flex;
      justify-content: right;
      margin-top: 4px;
      margin-right: 5%;
    }

    & div:last-child {
      width: 100%;

      & .line-stat-back {
        display: flex;
        width: 100%;
        float: left;
        height: 7px;
        border-radius: 8px;
        opacity: 0.2;
      }
      & .line-stat {
        display: flex;
        margin-bottom: -10px;
        float: left;
        height: 7px;
        border-radius: 8px;
        opacity: 1;
      }
    }

    &:nth-child(2) {
      margin-top: 20px;
    }
    @media (max-width: 768px) {
      width: 90%;
      font-size: 10px;

      &:nth-child(2) {
        margin-top: 10px;
      }

      .vertical-line {
        border-right: 2px solid #e0e0e0;
        padding: 0 10px;
        height: 40px;
      }

      & div:nth-child(3) {
        width: 70px;
        display: flex;
        justify-content: right;
        margin-top: 4px;
        margin-right: 5%;
      }
      & div:last-child {
        width: 100%;

        & .line-stat-back {
          height: 4px;
        }
        & .line-stat {
          height: 4px;
        }
      }
    }
  }
`;
