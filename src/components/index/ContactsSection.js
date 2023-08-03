import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacto" className="contact py-10">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p>Si tienes alguna pregunta o consulta, no dudes en contactarme a través de mis redes sociales o el siguiente formulario.</p>
        <div className="contact-links">
          <a href="https://www.instagram.com/jeremiperez19" className="social-link instagram">
            <img src="assets/img/icons/instagram.svg" alt="Instagram" width="32" height="32" />
          </a>
          <a href="https://wa.me/+584241939329" className="social-link whatsapp">
            <img src="assets/img/icons/whatsapp.svg" width="32" height="32" />
          </a>
          <a href="https://www.youtube.com/@jeremi4645" className="social-link youtube">
            <img src="assets/img/icons/youtube.svg" width="32" height="32" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
