import styled from "styled-components";

export default styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary.main};
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 52px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s ease-in;


  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    transform: scale(0.998);
  }
  &[disabled]{
    background-color: #ccc;
    cursor: default;
    transform: scale(1)
  }
`