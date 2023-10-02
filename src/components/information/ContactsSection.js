import React from 'react'

const ContactSection = () => {
  return (
    <div className="bg-grays-500 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl text-primarys-900 font-semibold mb-4">Forma parte de nuestra comunidad</h2>
        <p className="text-primarys-900 mb-14 ">Únete a nosotros para participar en nuestra comunidad. ¡Te damos la bienvenida!</p>
        <form className="mx-auto flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-1/6 mb-4 md:mb-0 md:mr-4">
            <label className="block uppercase tracking-wide text-primarys-900 text-xs font-bold mb-2">
              Nombre
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-700 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Joe" />
          </div>
          <div className="w-full md:w-1/6 mb-4 md:mb-0 md:mr-4">
            <label className="block uppercase tracking-wide text-primarys-900 text-xs font-bold mb-2">
              Apellido
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-700 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0 md:mr-4">
            <label className="block uppercase tracking-wide text-primarys-900 text-xs font-bold mb-2">
              Correo
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-700 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="correo@example.com" />
          </div>
          <div className="w-full md:w-1/5 md:mt-6">
            <button className="bg-grays-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Suscribirme
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default ContactSection
