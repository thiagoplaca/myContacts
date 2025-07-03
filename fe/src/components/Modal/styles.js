import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);

  > h1 {
    font-size: 22px;
    color: ${({theme, danger}) => (
      danger ? theme.colors.danger.main : theme.colors.gray[900]
    )}
  }

  .modal-body {
    margin-top: 32px;
  }

`

export const Footer = styled.footer `
    display: flex;
    justify-content: flex-end;
    gap: 24px;
    margin-top: 16px;

    .cancel-button {
      background-color: transparent;
      font-size: 16px;
      border: none;
      color: ${({ theme }) => theme.colors.gray[200]};

      &[disabled] {
        cursor: default;
      }
    }
`