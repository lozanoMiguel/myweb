import React from 'react'
import '../styles/Modal.css'

export default function Modal({ open, children, onClose }) {
  if (!open) return null 

  return (
    <>
      <div className='overlayModal'></div>
      <div className='modal'>
        {children}
        <button className='closeBtnn' onClick={onClose}>Close</button>
      </div>
    </>
  )
}
