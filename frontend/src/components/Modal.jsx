import { createContext } from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const ModalContext = createContext({
  isOpen: null,
  setIsOpen: null
})

function Modal ({
  isOpen,
  setIsOpen,
  children,
  contentLabel
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      style={customStyles}
      onRequestClose={() => setIsOpen(false)}
    >
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </ModalContext.Provider>
    </ReactModal>
  )
}

export default Modal
