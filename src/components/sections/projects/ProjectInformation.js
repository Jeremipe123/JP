import React from 'react'
import Divider from '@/components/common/Divider'
import Link from 'next/link'

const ProjectData = [
  {
    title: 'EcoFusion Fitness',
    description: '"EcoFusion Fitness se dedica a transformar vidas a través del fitness personalizado y clases en grupo motivadoras. Nuestro objetivo es inspirar y guiar a las personas hacia un estilo de vida activo y saludable, brindando programas de entrenamiento adaptados y clases divertidas que fomentan el bienestar físico y mental."',
    image: '/assets/img/projects/1.png',
    link: '/demo/EcoFusion',
    color: 'text-[#FF4500]'
  },
  {
    title: 'Lens Perfect',
    description: '"Descubre la belleza en cada instante: Lens Perfect captura emociones y momentos en imágenes impresionantes. Explora nuestro mundo visual y sumérgete en un viaje fotográfico excepcional."',
    image: '/assets/img/projects/4.png',
    link: '/demo/LensPerfect',
    color: 'text-[#000000]'
  },
  {
    title: 'AI ',
    title2: ' PLAY',
    description: '"Utilizamos tecnologías avanzadas de inteligencia artificial y análisis de datos para ofrecer pronósticos deportivos precisos y recomendaciones de apuestas en tiempo real, confiables y certeros"',
    image: '/assets/img/projects/2.png',
    link: '/demo/EcoFusion',
    color: 'text-[#FFBD5B]',
    color2: 'text-[#CECECE]'
  },
  {
    title: 'Confidencial ',
    description: 'Por petición del cliente se ha ocultado algunos indicadores, los que se muestran son REALES "Este proyecto se basa en la gestión y administración de población de manera masiva, contando con muchas funcionalidades que la ayudan a ser la más completa."',
    image: '/assets/img/projects/3.png',
    link: '/demo/Confidential',
    color: 'text-[#7D3795]'
  }

]

const ProjectDescription = () => {
  return (
    <div className="bg-white py-10">
      {ProjectData.map((project, projectIndex) => (
        <React.Fragment key={project.title}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <>
              <div className="order-1 lg:order-none px-8 sm:px-12 lg:px-14 text-justify">
                <h2
                  className={`text-center text-4xl md:text-5xl mb-10 ${project.color
                    }`}
                >
                  {project.title}
                  {project.title2 && (
                    <span
                      className={`text-center text-4xl md:text-5xl ${project.color2
                        }`}
                    >
                      {project.title2}
                    </span>
                  )}
                </h2>
                <p className="text-xl">{project.description}</p>
              </div>
              <Link href={project.link}>
                <div className="order-1 lg:order-none px-8 sm:px-12 lg:px-14">
                  <img
                    src={project.image}
                    alt="Foto"
                    className="w-full"
                  />
                </div>
              </Link>
            </>
          </div>
          <Divider key={`divider-${project.title}`} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProjectDescription
