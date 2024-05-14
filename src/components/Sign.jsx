import React from 'react'
import CardFormulario from './Forms/CardFormulario'
import { Formik, useFormik } from 'formik'
import LabelForm from './Forms/LabelForm'
import InputForm from './Forms/InputForm'
 

const Sign = () => {

  const onSubmitFormulario = (values)=>{
    console.log(values);
  }

  const {handleSubmit, handleChange}=useFormik({
    initialValues:{
      name: '',
      email:'',
      password:''
    },
    onSubmit:(values)=>{
      onSubmitFormulario(values)
    }
  })
  

  return (
    <>
      <CardFormulario img={'/public/img/fotoRegister.png'}>
        <div>
          <h1 className='text-2xl text-register font-poppins font-bold text-center pb-4'>Regístrate</h1>
          <form className='w-96'onSubmit={handleSubmit}>
            <LabelForm htmlFor={'Nombre'}>Nombre</LabelForm>
            <InputForm handleChange={handleChange} name={'name'} type={'text'}/>
            <LabelForm htmlFor={'Email'}>Email</LabelForm>
            <InputForm handleChange={handleChange} name={'email'} type={'email'}/>
            <LabelForm htmlFor={'Password'}>Password</LabelForm>
            <InputForm handleChange={handleChange} name={'password'} type={'password'}/>
            <button className=' mt-4 bg-register hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'type='submit'>Registrarse</button>


          </form>
          
        </div>
        
      </CardFormulario>
      
    
    </>
    
  )
}

export default Sign