import styled from "styled-components"

export const Container = styled.div`
  margin-top: 32px;
`
export const InputSearchContainer = styled.div`
  width: 100%;


  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color:hsl(0, 0.00%, 73.70%);
    }

    &:focus {
      border: 1px solid #bcbcbc;
    }
  }

`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`

export const ListHeader = styled.header`
  margin: 24px 0 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transform: ${({orderBy}) => orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: transform 0.2s ease-in;
    }
  }


`
export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;

      small {
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};

    }
  }

  .actions {
    display: flex;
    align-items: center;

      button {
        background: transparent;
        border: none;
        margin-left: 8px;
      }
    }
`