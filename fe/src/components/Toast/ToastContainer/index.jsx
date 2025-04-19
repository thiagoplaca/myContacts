import { Container } from './styles'
import ToastMessage from '../ToastMessage'

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text='Default toast' />
      <ToastMessage text='Error Toast' type='danger' />
      <ToastMessage text='Success Toast' type='success' />
    </Container>
  )
}