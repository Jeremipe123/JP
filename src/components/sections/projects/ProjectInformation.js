import React from 'react'
import Divider from '@/components/common/Divider'

const ProjectData = [
  {
    title: 'EcoFusion Fitness',
    description: '"EcoFusion Fitness se dedica a transformar vidas a través del fitness personalizado y clases en grupo motivadoras. Nuestro objetivo es inspirar y guiar a las personas hacia un estilo de vida activo y saludable, brindando programas de entrenamiento adaptados y clases divertidas que fomentan el bienestar físico y mental."',
    image: '/assets/img/projects/1.png',
    color: 'text-[#FF4500]'
  },
  {
    title: 'Lens Perfect',
    description: '"Descubre la belleza en cada instante: Lens Perfect captura emociones y momentos en imágenes impresionantes. Explora nuestro mundo visual y sumérgete en un viaje fotográfico excepcional."',
    image: '/assets/img/projects/4.png',
    color: 'text-[#000000]'
  },
  {
    title: 'AI ',
    title2: ' PLAY',
    description: '"Utilizamos tecnologías avanzadas de inteligencia artificial y análisis de datos para ofrecer pronósticos deportivos precisos y recomendaciones de apuestas en tiempo real, confiables y certeros"',
    image: '/assets/img/projects/2.png',
    color: 'text-[#FFBD5B]',
    color2: 'text-[#CECECE]'
  },
  {
    title: 'Confidencial ',
    description: 'Por petición del cliente se ha ocultado algunos indicadores, los que se muestran son REALES "Este proyecto se basa en la gestión y administración de población de manera masiva, contando con muchas funcionalidades que la ayudan a ser la más completa."',
    image: '/assets/img/projects/3.png',
    color: 'text-[#7D3795]'
  }

]

const ProjectDescription = () => {
  return (
    <div className="bg-white py-10">
      {
        ProjectData.map((project, projectIndex) => (
          <>
            <div key={ projectIndex } className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {
                (projectIndex % 2) === 0
                  ? (
                    <>
                      <div className="px-8 sm:px-12 lg:px-14">
                        <img src={ ProjectData[projectIndex].image } alt="Foto" className="w-full" />
                      </div>
                      <div className="px-8 sm:px-12 lg:px-14 text-justify">
                        <h2 className={ `text-center text-4xl md:text-5xl mb-10 ${ProjectData[projectIndex].color}` }>
                          { ProjectData[projectIndex].title }
                          <span className={ `text-center text-4xl md:text-5xl ${ProjectData[projectIndex].color2}` }>
                            { ProjectData[projectIndex].title2 }
                          </span>
                        </h2>
                        <p className="text-xl">
                          { ProjectData[projectIndex].description }
                        </p>
                      </div>
                    </>)
                  : (
                    <>
                      <div className="px-8 sm:px-12 lg:px-14 text-justify">
                        <h2 className={ `text-center text-4xl md:text-5xl mb-10 ${ProjectData[projectIndex].color}` }>
                          { ProjectData[projectIndex].title }
                          <span className={ `text-center text-4xl md:text-5xl ${ProjectData[projectIndex].color2}` }>
                            { ProjectData[projectIndex].title2 }
                          </span>
                        </h2>
                        <p className="text-xl">
                          { ProjectData[projectIndex].description }
                        </p>
                      </div>
                      <div className="px-8 sm:px-12 lg:px-14">
                        <img src={ ProjectData[projectIndex].image } alt="Foto" className="w-full" />
                      </div>
                    </>)
              }
            </div>
            <Divider />
          </>
        )) }
    </div>
  )
}

export default ProjectDescription
