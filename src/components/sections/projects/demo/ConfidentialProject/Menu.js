import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { PiUsersThree } from 'react-icons/pi'
import { LiaMedalSolid } from 'react-icons/lia'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { CiViewList } from 'react-icons/ci'
import { MdLogout } from 'react-icons/md'

const MenuConfidentialProject = () => {
  return (
    <div className='h-screen w-20 bg-white flex flex-col'>
      <div className="mt-5 px-4 flex flex-col justify-between items-center flex-grow">
        <p className='text-xl mb-8'>Logo</p>
        <button className='py-6 mr-1'>
          <AiOutlineHome size={28} color='purple' />
        </button>
        <button className='py-6 mr-1'>
          <PiUsersThree size={28} color='purple' />
        </button>
        <button className='py-6 mr-1'>
          <LiaMedalSolid size={28} color='purple' />
        </button>
        <button className='py-6 mr-1'>
          <BiBarChartAlt2 size={25} color='purple' />
        </button>
        <button className='py-6 mr-1'>
          <FaRegUser size={23} color='purple' />
        </button>
        <button className='py-6 mr-1'>
          <IoSettingsOutline size={26} color='purple' />
        </button>
        <button className='py-6 mr-1'>
          <CiViewList size={30} color='purple' />
        </button>
        <button className='py-6 mr-1'>
          <MdLogout size={26} color='purple' />
        </button>
      </div>
    </div>
  )
}

export default MenuConfidentialProject
