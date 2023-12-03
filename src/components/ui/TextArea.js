import React from 'react'

const Textarea = ({ label, placeholder, name, value, maxLength, onChange, error, handleKeyPress }) => {
  return (
    <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
      <label className="block uppercase tracking-wide text-primary-900 text-xs mb-2">
        { label }
      </label>
      <textarea
        className="appearance-none block w-full bg-[#D1D5DB] text-primary-700 py-3 px-4 leading-tight focus:outline-none focus:border-primary-500 resize-none"
        id={ label }
        placeholder={ placeholder }
        name={ name }
        value={ value }
        onChange={ onChange }
        onKeyDown={ handleKeyPress }
        maxLength={ maxLength }
        rows="4" // You can adjust the number of rows as needed
      />
      { error && <span className="text-white text-xs">{ error }</span> }
    </div>
  )
}

export default Textarea
