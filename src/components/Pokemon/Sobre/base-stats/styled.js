import styled from 'styled-components';

export const BaseStatsStyle = styled.div`
  width: 100%;
  margin-top: 20px;

  .stats {
    align-items: center;
    display: flex;
    width: 100%;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }

  .stat-name {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-left: 20px;
  }
  .vertical-line {
    border-right: 2px solid #e0e0e0;
    padding: 0 10px;
    height: 50px;
  }

  .base-stat {
    width: 70px;
    display: flex;
    justify-content: right;
    margin-top: 4px;
    margin-right: 5%;
  }

  .line {
    width: 90%;
  }

  .line-stat-back {
    display: flex;
    width: 100%;
    float: left;
    height: 10px;
    border-radius: 8px;
  }
  .line-stat {
    display: flex;
    margin-bottom: -10px;
    float: left;
    height: 10px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 15px;

    .stats {
      &:nth-child(2) {
        margin-top: 10px;
      }
    }

    .stat-name {
      padding: 0;
    }
    .vertical-line {
      border-right: 2px solid #e0e0e0;
      padding: 0 10px;
      height: 50px;
    }

    .base-stat {
      width: 70px;
      display: flex;
      justify-content: right;
      margin-top: 4px;
      margin-right: 5%;
    }
  }
`;
