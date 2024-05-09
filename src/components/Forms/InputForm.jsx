import React from 'react'

const InputForm = ({type,name,handleChange}) => {
  return (
    <input
        onChange={handleChange}
        name={name}
        type={type}
        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-insert focus:ring-indigo600 sm:text-sm sm:leading-6'
        required
    
    />
  )
}

export default InputForm