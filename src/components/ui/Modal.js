import Input from './Input'
import Button from './Button'
import { useState } from 'react'
import Textarea from './TextArea'
// import emailjs from 'emailjs-com'
import { AiOutlineClose } from 'react-icons/ai'

const DynamicModal = ({ isOpen, handleClose, issue }) => {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    description: '',
    issue
  })

  const [errors, setErrors] = useState({})

  const isNameValid = (event) => {
    // Permitir solo letras (A-Z y a-z) y espacios
    const isValidChar = /^[a-zA-ZáéíóúüÜÁÉÍÓÚ\s]*$/.test(event.key)
    if (!isValidChar) {
      event.preventDefault()
    }
  }

  const isEmailValid = (event) => {
    // Expresión regular para validar el formato del correo electrónico
    const isValidChar = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9.@_-]*$/.test(event.key)
    if (!isValidChar) {
      event.preventDefault()
    }
  }

  const isDescriptionValid = (event) => {
    // Expresión regular para validar el formato del correo electrónico
    const isValidChar = /^[a-zA-Z0-9áéíóúÁÉÍÓÚ,.\s()üÜ¿?!%$-/]*$/.test(event.key)
    if (!isValidChar) {
      event.preventDefault()
    }
  }

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const newErrors = {}

    // Validar longitud mínima y máxima si es necesario
    if (formData.name.length < 3 || formData.name.length > 20) {
      newErrors.name = 'El nombre debe tener entre 3 y 20 caracteres'
    }

    if (formData.last_name.length < 3 || formData.last_name.length > 20) {
      newErrors.last_name = 'El apellido debe tener entre 3 y 20 caracteres'
    }

    if (formData.email.length < 5 || formData.email.length > 80) {
      newErrors.email = 'El correo debe tener entre 5 y 80 caracteres'
    }

    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Correo electrónico no válido'
    }

    if (formData.description.length < 2 || formData.description.length > 300) {
      newErrors.description = 'La descripción debe tener entre 2 y 300 caracteres'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    // Limpiar el error cuando se cambia el valor
    setErrors({
      ...errors,
      [e.target.name]: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Validar el formulario antes de enviar
      if (!validateForm()) {
        return
      }

      // Limpiar el formulario después de enviar los datos
      setFormData({
        name: '',
        last_name: '',
        email: '',
        description: ''
      })

      // Enviar el correo utilizando Email.js
      // const templateParams = {
      //   name: formData.name,
      //   last_name: formData.last_name,
      //   to_email: formData.email
      // }

      // await emailjs.send('service_epj2zqh', 'template_botx107', templateParams, '13a5Yg0uCwD0Q4175')

      // Mostrar la alerta después de 2 segundos
      handleClose()
    } catch (error) {
      console.error('Error al enviar solicitud:', error)
    }
  }

  return (
    <>
      { isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center animate-fade-in">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div className="bg-primary-500 p-4 px-6 shadow-lg z-20 text-white animate-fade-in">
            <button
              type="button"
              className="text-2xl mb-5 ml-[94.5%]"
              onClick={ handleClose }
            >
              <AiOutlineClose />
            </button>
            <h2 className="flex justify-center text-3xl -mt-10 mb-12">Solicitud</h2>
            <form className="grid grid-cols-2 gap-4 text-black">
              <Input label="Nombre" placeholder="Alex" name="name" value={ formData.name } maxLength={ 20 } onChange={ handleInputChange } error={ errors.name } handleKeyPress={ isNameValid } />
              <Input label="Apellido" placeholder="Gómez" name="last_name" value={ formData.last_name } maxLength={ 20 } onChange={ handleInputChange } error={ errors.last_name } handleKeyPress={ isNameValid } />
              <Input label="Correo" placeholder="correo@example.com" name="email" value={ formData.email } maxLength={ 80 } onChange={ handleInputChange } error={ errors.email } handleKeyPress={ isEmailValid } />
              <Textarea label="Descripción" placeholder="Cuentame más, sobre que te puedo ayudar" name="description" value={ formData.description } maxLength={ 300 } onChange={ handleInputChange } error={ errors.description } handleKeyPress={ isDescriptionValid } />
            </form>
            <div className="flex justify-center py-4">
              <Button label="Enviar" onSubmit={ handleSubmit } />
            </div>
          </div>
        </div>
      ) }
    </>
  )
}

export default DynamicModal
