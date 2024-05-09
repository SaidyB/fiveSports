import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import { routes } from "./components/utils/routes"
import Sign from "./components/Sign"
import Login from "./components/Login"

function App() {
  

  return (
    <>
      <div className="bg-fondo min-h-screen font-poppins font-semibold ">
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.registrarse} element={<Sign/>}/>
            <Route path={routes.inicioSesion} element={<Login/>}/>
            
        </Routes>
      </div>
    </>
  )
}

export default App
