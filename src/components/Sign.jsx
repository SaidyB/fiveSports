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
          <h1>Registrese</h1>
          <form onSubmit={handleSubmit}>
            <LabelForm htmlFor={'Nombre'}>Nombre</LabelForm>
            <InputForm handleChange={handleChange} name={'name'} type={'text'}/>
            <LabelForm htmlFor={'Email'}>Email</LabelForm>
            <InputForm handleChange={handleChange} name={'email'} type={'email'}/>
            <LabelForm htmlFor={'Password'}>Password</LabelForm>
            <InputForm handleChange={handleChange} name={'password'} type={'password'}/>
            <button type='submit'>Registrarse</button>


          </form>
          
        </div>
        
      </CardFormulario>
      
    
    </>
    
  )
}

export default Sign