import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Overlay } from './styles.js'
import Spinner from '../Spinner/index.jsx'


export default function Loader({isLoading}) {
  if(!isLoading) {
    return null
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner  size={90}/>
    </Overlay>,
    document.getElementById('loader-root')
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}