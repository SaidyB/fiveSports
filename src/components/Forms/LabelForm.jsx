import React from 'react'

const LabelForm = ({children, htmlFor}) => {
  return (
    <label htmlFor={htmlFor} className='text-register block text-sm font-bold leading-6 text-gray-900'> 
        {children}
    </label>
  )
}

export default LabelForm