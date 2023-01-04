import styled from 'styled-components';

export const AboutArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  align-items: center;

  .text {
    font-weight: 400;
    font-size: 15px;
    margin-top: 40px;
    @media (max-width: 768px) {
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      width: 312px;
      height: 32px;
      color: #212121;
      text-align: justify;
    }
  }
`;

export const BodyData = styled.div`
  display: flex;
  width: 500px;
  height: 80px;
  justify-content: space-between;
  margin-top: 20px;
  & .weight {
    display: flex;
    justify-content: center;
    & span {
      align-items: center;
      width: fit-content;
      display: flex;
    }
    & p {
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      display: flex;
      margin: 0 auto;
      margin-top: 20px;
      color: #666666;
    }
  }
  & .height {
    display: flex;
    justify-content: center;
    & span {
      width: fit-content;
      align-items: center;
      display: flex;
    }
    & p {
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      display: flex;
      margin: 0 auto;
      margin-top: 20px;
      color: #666666;
    }
  }
  & .moves {
    display: flex;
    justify-content: center;
    & span {
      align-items: center;
      width: fit-content;
      display: flex;
      flex-direction: column;
      line-height: 25px;
      align-items: flex-start;
    }
    & p {
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      display: flex;
      margin: 0 auto;
      margin-top: 20px;
      color: #666666;
    }
  }
  & div {
    flex-direction: column;
    & span {
      width: 54px;
      height: 36px;
      font-weight: 400;
      font-size: 15px;
      line-height: 16px;
      & .iconWeight {
        font-size: 30px;
      }
      & .iconRuler {
        font-size: 30px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 252px;
    height: 48px;
    justify-content: space-between;
    margin-top: 0;
    & .weight {
      width: 70px;
      height: 48px;
      display: flex;
      justify-content: center;
      & span {
        align-items: center;
        width: fit-content;
        display: flex;
      }
      & p {
        font-weight: 400;
        font-size: 8px;
        line-height: 12px;
        display: flex;
        margin: 0 auto;
      }
    }
    & .height {
      width: 43px;
      height: 48px;
      display: flex;
      justify-content: center;
      width: fit-content;
      & span {
        align-items: center;
        display: flex;
      }
      & p {
        font-weight: 400;
        font-size: 8px;
        line-height: 12px;
        display: flex;
        margin: 0 auto;
      }
    }
    & .moves {
      width: fit-content;
      height: 48px;
      display: flex;
      justify-content: center;
      & span {
        align-items: left;
        display: flex;
        line-height: 5px;
      }
      & p {
        font-weight: 400;
        font-size: 8px;
        line-height: 12px;
        display: flex;
        margin: 0 auto;
      }
    }
    & div {
      & span {
        width: 54px;
        height: 36px;
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        & .iconWeight {
          font-size: 16px;
        }
        & .iconRuler {
          font-size: 16px;
        }
      }
    }
  }
`;
