import React from 'react'

const PricingSection = () => {
  const pricingPlans = [
    {
      title: 'Asesoría',
      description: '1 hora\n$100',
      buttonText: 'Reservar por ahora'
    },
    {
      title: 'Consultoría',
      description: '1 hora\n$100',
      buttonText: 'Reservar por ahora'
    }
  ]

  return (
    <section className="bg-primary-500 py-8 text-white text-center">
      <div className="relative mb-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white h-1 w-1/3"></div>
      </div>
      <p className="text-xl font-semibold mb-4">Guía básica</p>
      <p className="text-xl font-semibold mb-8">Guía personalizada</p>
      <div className="mx-auto max-w-md bg-white p-6 rounded-lg shadow-lg">
        { pricingPlans.map((plan, index) => (
          <div key={ index } className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{ plan.title }</h3>
            <p className="text-gray-500 mb-2">{ plan.description }</p>
            <button className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5">
              { plan.buttonText }
            </button>
          </div>
        )) }
      </div>
    </section>
  )
}

export default PricingSection
