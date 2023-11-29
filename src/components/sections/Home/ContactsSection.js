import emailjs from 'emailjs-com'
import React, { useState } from 'react'
import Input from '@/components/ui/Input'
import Alert from '@/components/ui/Alert'
import Button from '@/components/ui/Button'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: ''
  })

  const [showAlert, setShowAlert] = useState(false)
  const [errors, setErrors] = useState({})

  const handleKeyPressName = (event) => {
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

    if (formData.email.length < 5 || formData.email.length > 800) {
      newErrors.email = 'El correo debe tener entre 5 y 80 caracteres'
    }

    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Correo electrónico no válido'
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
        email: ''
      })

      // Enviar el correo utilizando Email.js
      const templateParams = {
        name: formData.name,
        last_name: formData.last_name,
        to_email: formData.email
      }

      await emailjs.send('service_epj2zqh', 'template_botx107', templateParams, '13a5Yg0uCwD0Q4175')

      // Mostrar la alerta después de 2 segundos
      setShowAlert(true)
    } catch (error) {
      console.error('Error al enviar solicitud:', error)
    }
  }

  return (
    <div className="bg-primary-500 py-8">
      <div className="container mx-auto px-8 text-justify">
        <h2 className="text-3xl text-primary-900 mb-4">Forma parte de nuestra comunidad</h2>
        <p className="text-primary-900 mb-14 ">Únete a nosotros para participar en nuestra comunidad. ¡Te damos la bienvenida!</p>
        <form className="mx-auto flex flex-col md:flex-row md:items-center" onSubmit={ handleSubmit }>
          <Input label="Nombre" placeholder="Joe" name="name" value={ formData.name } maxLength={ 20 } onChange={ handleInputChange } error={ errors.name } handleKeyPress={ handleKeyPressName } />
          <Input label="Apellido" placeholder="Doe" name="last_name" value={ formData.last_name } maxLength={ 20 } onChange={ handleInputChange } error={ errors.last_name } handleKeyPress={ handleKeyPressName } />
          <Input label="Correo" placeholder="correo@example.com" name="email" value={ formData.email } maxLength={ 80 } onChange={ handleInputChange } error={ errors.email } handleKeyPress={ isEmailValid } />
          <Button label="Enviar solicitud" onSubmit={ handleSubmit } />
        </form>

        { showAlert && (
          <Alert message="¡Se ha enviado un correo satisfactoriamente!" onClose={ () => setShowAlert(false) } timeout={ 4000 } />
        ) }
      </div>
    </div>
  )
}

export default ContactSection
