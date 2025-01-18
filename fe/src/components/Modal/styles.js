import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  position: absolute;
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
  margin-inline: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);

  h1 {
    font-size: 22px;
    color: ${({theme, danger}) => (
      danger ? theme.colors.danger.main : theme.colors.gray[900]
    )}
  }

  p {
  margin-top: 8px;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;

    .cancel-button {
      background-color: transparent;
      font-size: 16px;
      border: none;
      color: ${({theme})=> theme.colors.gray[200]};
    }
  }

`

export const Footer = styled.footer `

`