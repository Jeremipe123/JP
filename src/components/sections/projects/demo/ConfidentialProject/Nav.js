import React from 'react'

const NavConfidentialProject = () => {
  return (
    <div className='h-14 lg:h-[10%] w-full bg-[#803494] px-4 z-10 flex justify-center sm:justify-between lg:justify-between items-center'>
      <p className='text-white text-sm lg:text-md font-bold'>Titulo del proyecto</p>
      <div className='text-right'>
        <p className='text-white hidden sm:block lg:text-sm'>Administrador: Nombre de usuario</p>
      </div>
    </div>
  )
}

export default NavConfidentialProject
