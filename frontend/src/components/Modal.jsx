import { createContext } from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: 'rgba(20, 50, 30, 0.95)',
    border: '2px solid #6ee7b7',
    borderRadius: '1rem',
    boxShadow: '0 8px 32px 0 rgba(34,197,94,0.25), 0 1.5px 0 #a7f3d0',
    backdropFilter: 'blur(8px)',
    color: '#e6f4ea',
    padding: '2rem',
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
