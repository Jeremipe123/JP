import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <img src="/assets/img/about_me_photo.jpg" alt="Foto" className="rounded-lg w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Quién soy</h2>
            <p className="mb-6">
              ¡Hola! Soy Jeremi Perez, un apasionado desarrollador de software con una amplia experiencia en
              tecnologías web y móviles. Me encanta enfrentar nuevos desafíos y aprender cosas nuevas cada día.
            </p>
            <h2 className="text-3xl font-bold mb-4">Qué hago</h2>
            <p className="mb-6">
              Mi objetivo es crear soluciones tecnológicas innovadoras que simplifiquen la vida de las personas.
              Me especializo en el desarrollo de aplicaciones web y móviles de alta calidad, utilizando las
              últimas tecnologías y mejores prácticas de la industria.
            </p>
            <h2 className="text-3xl font-bold mb-4">Qué aportaré</h2>
            <p>
              Con mi experiencia y pasión por la tecnología, estoy comprometido a ofrecer soluciones
              excepcionales que impulsen el crecimiento y el éxito de tu empresa. Trabajaré arduamente para
              superar tus expectativas y asegurarme de que obtengas el máximo valor de cada proyecto en el que
              trabajemos juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
