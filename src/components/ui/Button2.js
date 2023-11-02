import React from 'react'

const Button = ({ label }) => {
  return (
    <div className="w-full md:w-1/5 md:mt-6">
      <button className="bg-primary-300 hover:bg-primary-500 text-black py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
        { label }
      </button>
    </div>
  )
}

export default Button
