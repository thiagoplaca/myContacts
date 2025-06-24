import ReactDOM from 'react-dom'
import { Overlay, Container, Footer } from "./styles"
import Button from '../Button'
import PropTypes from "prop-types"

export default function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm
  }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
          <div className="modal-body">
            {children}
          </div>
        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={() => alert('Cancelou')}
            >
            {cancelLabel}
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={() => alert('Confimou')}
            >
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
      document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar'
}

