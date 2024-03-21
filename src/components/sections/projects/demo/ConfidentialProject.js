import React from 'react'
import MenuConfidentialProject from './ConfidentialProject/Menu'
import NavConfidentialProject from './ConfidentialProject/Nav'
import ContentConfidentialProject from './ConfidentialProject/Content'

const ConfidentialProject = () => {
  return (
    <div className="relative h-screen bg-gradient-to-t from-blue-400 to-purple-600 flex">
      <MenuConfidentialProject />
      <div className="flex flex-col w-full">
        <NavConfidentialProject />
        <div className="overflow-auto flex-grow">
          <ContentConfidentialProject />
        </div>
      </div>
    </div>
  )
}

export default ConfidentialProject
