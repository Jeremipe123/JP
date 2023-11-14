import React from 'react'

const MainSection = () => {
  return (
    <div className="hero bg-black bg-cover bg-center text-white py-20">
      <div className="container flex items-center justify-center mx-auto px-4">
        <div className="hero-text text-center animate-fade-in">
          <h1 className="text-3xl mt-6 mb-11">Bienvenido</h1>
          <p className="text-xl md:text-2xl px-5 md:px-0 max-w-2xl mx-auto text-justify">&quot;En cada paso, la elegancia es mi compañera,
            la originalidad es mi brújula, y la excelencia es mi destino&quot;.</p>
        </div>
      </div>
      <div className="banner-container h-80 animate-fade-in">
        <img src="/assets/img/background.png" alt="Banner de la marca personal" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default MainSection
