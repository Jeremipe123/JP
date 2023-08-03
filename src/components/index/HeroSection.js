/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="hero bg-black bg-cover bg-center text-white py-20">
      <div className="container flex items-center justify-center mx-auto px-4">
        <div className="hero-text text-center">
          <h1 className="text-4xl font-bold mt-6 mb-11 font-montserrat">Welcome to my page</h1>
          <p className="text-2xl max-w-3xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          {/* <h1 className="text-4xl font-bold mb-6 font-montserrat">Bienvenido campeón</h1> */}
          {/* <p className="text-lg">Encuentra recursos para desarrollar habilidades blandas y potenciar tu liderazgo, comunicación, persuasión y más.</p> */}
        </div>
      </div>
      <div className="banner-container h-96">
        <img src="/assets/img/background.png" alt="Banner de la marca personal" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
