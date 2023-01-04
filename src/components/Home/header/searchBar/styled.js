import styled from 'styled-components';

export const SearchBarStyle = styled.input`
  font-family: Poppins;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 8px;
  gap: 16px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #e0e0e0;
  margin-bottom: 10px;

  &::placeholder {
    text-align: center;
  }
  &:focus {
    border: 1px solid black;
    &::placeholder {
      color: transparent;
    }
  }

  &:focus {
    &:placeholder-shown {
      text-align: left;
      color: black;
    }
  }

  @media (max-width: 768px) {
    height: 24px;
    font-size: 10px;
    &::placeholder {
      font-weight: 400;
      line-height: 16px;
    }
  }
`;
