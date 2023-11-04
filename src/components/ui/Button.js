import React from 'react'

const Button = ({ label }) => {
  return (
    <div className="w-full md:w-1/5 md:mt-6 flex items-center justify-center">
      <button className="bg-primary-800 hover:bg-gray-900 text-white py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
        { label }
      </button>
    </div>
  )
}

export default Button
