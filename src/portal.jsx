import ReactDOM from 'react-dom'
import "./index.css"

function Portal({ children }) {
  const domElement = document.getElementById('portal')

  return (
    ReactDOM.createPortal(children, domElement)
  )
}

export default Portal
