import React, { useState } from 'react'
import { addUserToDatabase } from '@/backend/members'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Enviar datos del formulario al backend para registrar en la base de datos
      // Tu lógica para enviar datos al backend va aquí
      await addUserToDatabase(formData)
      // Limpiar el formulario después de enviar los datos
      setFormData({
        name: '',
        last_name: '',
        email: ''
      })
      // Actualizar la lista de usuarios (opcional, dependiendo de tu lógica)
      // updateUsersList()
    } catch (error) {
      console.error('Error al enviar solicitud:', error)
    }
  }

  return (
    <div className="bg-primary-500 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl text-primary-900 mb-4">Forma parte de nuestra comunidad</h2>
        <p className="text-primary-900 mb-14 ">Únete a nosotros para participar en nuestra comunidad. ¡Te damos la bienvenida!</p>
        <form className="mx-auto flex flex-col md:flex-row md:items-center" onSubmit={ handleSubmit }>
          <Input label="Nombre" placeholder="Joe" name="name" value={ formData.name } onChange={ handleInputChange } />
          <Input label="Apellido" placeholder="Doe" name="last_name" value={ formData.last_name } onChange={ handleInputChange } />
          <Input label="Correo" placeholder="correo@example.com" name="email" value={ formData.email } onChange={ handleInputChange } />
          <Button label="Enviar solicitud" onSubmit={ handleSubmit } />
        </form>
      </div>
    </div>
  )
}

export default ContactSection
