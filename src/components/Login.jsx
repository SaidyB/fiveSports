import React from 'react'
import CardFormulario from './Forms/CardFormulario'
import { Formik, useFormik } from 'formik'
import LabelForm from './Forms/LabelForm'
import InputForm from './Forms/InputForm'

const Login = () => {

  const onSubmitFormulario = (values)=>{
    console.log(values);
  }

  const {handleSubmit, handleChange}=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(values)=>{
      onSubmitFormulario(values)
    }
  })

  return (
    <CardFormulario img={'/public/img/fotoLogin.png'}>
      <div>
          <h1 className='text-2xl text-register font-poppins font-bold text-center pb-4'>Iniciar sesión</h1>
          <form className='w-96' onSubmit={handleSubmit}>
            <LabelForm htmlFor={'Email'}>Email</LabelForm>
            <InputForm handleChange={handleChange} name={'email'} type={'email'}/>
            <LabelForm htmlFor={'Password'}>Password</LabelForm>
            <InputForm handleChange={handleChange} name={'password'} type={'password'}/>
            <button className=' mt-4 bg-register hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'type='submit'>Login</button>
          </form>
        </div>
    
    </CardFormulario>
    
  )
}

export default Login