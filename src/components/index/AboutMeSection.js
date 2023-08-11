/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:px-2">
            <h2 className="text-3xl font-bold mb-4">Quién soy</h2>
            <p className="mb-6">
              ¡Hola! Soy Jeremi Perez, un apasionado desarrollador de software con una amplia experiencia en
              tecnologías web y móviles. Me encanta enfrentar nuevos desafíos y aprender cosas nuevas cada día.
            </p>
          </div>
          <div className="md:order-2">
            <img src="/assets/img/aboutme.png" alt="Foto" className="w-full" />
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutMe;
