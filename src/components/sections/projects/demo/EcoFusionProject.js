import React from 'react'

const EcoFusionProject = () => {
  return (
    <div className="min-h-screen flex flex-col font-eco">
      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/demo/fondoEco.png)' }}>
        <div className="container mx-auto max-w-7xl">
          <header className="flex justify-center md:justify-between items-center bg-black bg-opacity-70 py-8 w-full z-50">
            <div className="hidden md:block text-4xl font-bold text-[#ff4500] ml-8">EcoFusion Fitness</div>
            <nav className="mr-4">
              <ul className="flex text-white">
                <li className="mx-4"><button className="transition duration-300 hover:text-orange-500">Inicio</button></li>
                <li className="mx-4"><button className="transition duration-300 hover:text-orange-500">Servicios</button></li>
                <li className="mx-4"><button className="transition duration-300 hover:text-orange-500">Testimonios</button></li>
                <li className="mx-4"><button className="transition duration-300 hover:text-orange-500">Contacto</button></li>
              </ul>
            </nav>
          </header>
        </div>

        <div className="container mx-auto max-w-7xl py-64">
          <section className="hero text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Bienvenido a EcoFusion Fitness</h1>
            <p>Transforma tu cuerpo, transforma tu vida.</p>
            <button className="inline-block bg-[#ff4500] text-white text-xl px-6 py-3 rounded mt-8 hover:bg-gray-800 transition duration-300">¡Comienza Ahora!</button>
          </section>
        </div>
      </div>

      <footer className="bg-black py-10">
        <div className="container mx-auto max-w-7xl text-white">
          <div className="footer-content bg-opacity-80 p-8 rounded-xl text-center">
            <p>&copy; <span id="currentYear">{new Date().getFullYear()}</span> EcoFusion Fitness. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EcoFusionProject
