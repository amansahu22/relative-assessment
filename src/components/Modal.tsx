import React from "react"
type ModalProps = {
    children: React.ReactNode
}

const Modal = ({children}:ModalProps) => {
  return (
        <div className='modal__container w-1/3 px-6 py-4'>
            {children}
        </div>
  )
}

export default Modal