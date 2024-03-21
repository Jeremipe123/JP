import React from 'react'
import { HiUsers } from 'react-icons/hi'
import { SlNotebook } from 'react-icons/sl'
import { BsPersonVcard, BsGenderMale, BsGenderFemale } from 'react-icons/bs'
import { FaPersonCane } from 'react-icons/fa6'
import ColumnChart from './ColumnChart'
import MyComponent from './ComponentTable'

const ContentConfidentialProject = () => {
  // Datos de ejemplo para las tarjetas
  const cardsData = [
    { id: 1, title: '625,268', icon: HiUsers },
    { id: 2, title: '477,361', icon: SlNotebook },
    { id: 3, title: '4,171', icon: BsPersonVcard },
    { id: 4, title: '5,137', icon: BsGenderMale },
    { id: 5, title: '10,612', icon: BsGenderFemale },
    { id: 6, title: '3,003', icon: FaPersonCane }
  ]

  return (
    <div className='h-full w-11/12 rounded-xl bg-white mx-auto mt-8 overflow-auto p-6'>
      <div className="flex flex-row justify-center p-5">
        {cardsData.map(card => (
          <div key={card.id} className="flex items-center justify-center mx-1.5 border border-gray-300 shadow-md w-36 h-[4.5rem] rounded-lg">
            {card.icon({ size: 26, color: 'purple' })}
            <div className="h-10 mx-3 border-l-2 border-gray-300"></div>
            <h2 className="text-sm font-semibold">{card.title}</h2>
          </div>
        ))}
      </div>
      <div className="w-full h-px mx-auto bg-gray-300 mb-5" />
      <div className="flex flex-row">
        <div className="flex flex-col mr-8 w-2/6">
          <div className='flex items-center w-full h-8 bg-gray-200 rounded-md'>
            <p className='mx-3 text-sm'>Cargos ocupados</p>
          </div>
          <ColumnChart />
        </div>
        <div className="flex flex-col w-full">
          <div className='flex items-center w-full h-8 bg-gray-200 rounded-md'>
            <p className='mx-3 text-sm'>Resumen</p>
          </div>
          <MyComponent />
        </div>
      </div>
    </div>
  )
}

export default ContentConfidentialProject
