import React from 'react'

const Input = ({ label, placeholder, name, value, onChange }) => {
  return (
    <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
      <label className="block uppercase tracking-wide text-primary-900 text-xs mb-2">
        { label }
      </label>
      <input
        className="appearance-none block w-full bg-[#D1D5DB] text-primary-700 py-3 px-4 leading-tight focus:outline-none focus:border-primary-500"
        id={ label }
        type="text"
        placeholder={ placeholder }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </div>
  )
}

export default Input
