import styled, { css } from 'styled-components'

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
}

export const Container = styled.div`
  padding: 16px 32px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px #00000040;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;


  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }
`