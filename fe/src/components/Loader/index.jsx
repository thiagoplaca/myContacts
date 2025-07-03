import PropTypes from 'prop-types'

import { Overlay } from './styles.js'
import Spinner from '../Spinner/index.jsx'
import ReactPortal from '../ReactPortal/index.jsx'


export default function Loader({isLoading}) {
  if(!isLoading) {
    return null
  }

  return (
    <ReactPortal containerId='loader-root'>
      <Overlay>
        <Spinner size={90}/>
      </Overlay>
    </ReactPortal>
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}