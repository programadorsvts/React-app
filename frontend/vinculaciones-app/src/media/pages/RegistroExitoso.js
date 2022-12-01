import React, { useEffect } from 'react'
import NavBar from '../components/ComponentsHome/NavBar/NavBar'
import Footer from "../components/ComponentsHome/Footer/Footer";
import { useParams } from 'react-router-dom';

const RegistroExitoso = () => {

    let {userId} = useParams()

    useEffect(() => {
      console.log(userId)
    }, [])
    
  return (
    <>
    <NavBar/>
    <main className='container vh-100 my-5'>
        <p className='encabezado-4'>Te has registrado exitosamente, se te ha enviado un mensaje de correo para poder verificar el correo que has ingresado. Verifica tu correo para poder ingresar a tu cuenta.</p>
        <p className='encabezado-4'>Si ocurre algún problema, por favor, comunicate con nosotros al siguiente email: svts.unsl@gmail.com</p>
    </main>
    <Footer/>
    </>
  )
}

export default RegistroExitoso