import React from 'react'

const AboutMe = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:px-2 text-justify">
            <h2 className="text-3xl mb-4">¿Quién soy?</h2>
            <p className="mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div className="md:order-2">
            <img src="/assets/img/aboutme.png" alt="Foto" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
