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
  const menuItems = [
    { icon: AiOutlineHome, size: 28 },
    { icon: PiUsersThree, size: 28 },
    { icon: LiaMedalSolid, size: 28 },
    { icon: BiBarChartAlt2, size: 25 },
    { icon: FaRegUser, size: 23 },
    { icon: IoSettingsOutline, size: 26 },
    { icon: CiViewList, size: 30 },
    { icon: MdLogout, size: 26 }
  ]

  return (
    <div className='h-screen w-20 bg-white flex flex-col'>
      <div className="mt-5 px-4 flex flex-col justify-between items-center flex-grow">
        <p className='text-xl mb-8'>Logo</p>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <button
              className='py-6 mr-1 transition-transform transform hover:scale-110'
              style={{ outline: 'none' }} // Elimina el contorno al hacer click
            >
              <item.icon size={item.size} color='purple' />
            </button>
            {index !== menuItems.length - 1 && (
              <div className="w-full h-px mx-auto bg-gray-500" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default MenuConfidentialProject
