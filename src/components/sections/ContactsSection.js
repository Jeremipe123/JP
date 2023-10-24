import React from 'react'
/* ******************************************************** */
import Input from '../ui/Input'
import Button from '../ui/Button'
/* ******************************************************** */

const ContactSection = () => {
  return (
    <div className="bg-primary-500 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl text-primary-900 font-semibold mb-4">Forma parte de nuestra comunidad</h2>
        <p className="text-primary-900 mb-14 ">Únete a nosotros para participar en nuestra comunidad. ¡Te damos la bienvenida!</p>
        <form className="mx-auto flex flex-col md:flex-row md:items-center">
          <Input label="Nombre" placeholder="Joe" />
          <Input label="Apellido" placeholder="Doe" />
          <Input label="Correo" placeholder="correo@example.com" />
          <Button label="Enviar solicitud" />
        </form>
      </div>
    </div>
  )
}

export default ContactSection
