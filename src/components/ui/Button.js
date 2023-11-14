import React from 'react'

const Button = ({ label, onSubmit }) => {
  return (
    <div className="w-full md:w-1/5 md:mt-6 mt-4 flex items-center justify-center">
      <button
        className="bg-primary-800 hover:bg-gray-900 text-white py-2 px-4 focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={ onSubmit }
      >
        { label }
      </button>
    </div>
  )
}

export default Button
