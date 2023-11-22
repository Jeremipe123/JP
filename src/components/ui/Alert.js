// Alert.js
import React, { useRef, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Alert = ({ message, onClose, timeout }) => {
  const modalRef = useRef(null)
  const [visible, setVisible] = useState(true)

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.classList.add('animate-fade-out')
    }

    // Marcar como no visible después de la animación de salida
    setTimeout(() => {
      setVisible(false)
      onClose() // Llamar al cierre después de la animación
    }, 1000) // Ajusta el tiempo según la duración de la animación de salida
  }

  useEffect(() => {
    if (timeout) {
      // Ocultar la alerta después del tiempo especificado
      const timeoutId = setTimeout(() => {
        handleClose()
      }, timeout)

      // Limpiar el temporizador si se cierra manualmente antes de que finalice
      return () => clearTimeout(timeoutId)
    }
  }, [onClose, timeout])

  return (
    visible && (
      <div ref={ modalRef } className="fixed inset-0 z-10 flex items-center justify-center animate-fade-in">
        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        <div className="bg-primary-500 p-4 px-6 shadow-lg z-20 text-white animate-fade-in">
          <button type="button" className="text-2xl mb-5 ml-[94.5%]" onClick={ handleClose }>
            <AiOutlineClose />
          </button>
          <p className="text-lg text-center mb-8">{ message }</p>
        </div>
      </div>
    )
  )
}

export default Alert
