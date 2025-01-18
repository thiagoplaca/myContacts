import ReactDOM from 'react-dom'
import { Overlay, Container } from "./styles"
import Button from '../Button'
import PropTypes from "prop-types"

export default function Modal({danger}) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título Modal</h1>
        <p>Corpo do Modal</p>

        <footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </footer>
      </Container>
    </Overlay>,
      document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  danger: PropTypes.bool,
}

Modal.defaultProps = {
  danger: false,
}

