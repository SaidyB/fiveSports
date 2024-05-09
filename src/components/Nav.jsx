import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'


const Nav = () => {
  return (
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Link to={routes.home}><img className='w-15 h-16' src='/public/img/logo.png'/></Link>
                
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                
                <Link to={routes.registrarse}>
                    <button className='mr-5 hover:text-gray-900 inline-flex items-center border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 shadow-md font-semibold'>Sign up</button></Link>
                <Link to={routes.inicioSesion}>
                    <button className='mr-5 hover:text-gray-900 inline-flex items-center border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 shadow-md font-semibold'>Login</button>
                </Link>
                
                <button className='mr-5 hover:text-gray-900 inline-flex items-center border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 shadow-md font-semibold'><FontAwesomeIcon icon={faMoon} /></button>
            </nav>
            
        </div>
    </header>
  )
}

export default Nav