import styled from "styled-components";

export default styled.select`
  width: 100%;
  background-color: #ffffff;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  height: 52px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2 ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    }

  &[disabled] {
    background-color: ${({theme}) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[100]};
  }
`