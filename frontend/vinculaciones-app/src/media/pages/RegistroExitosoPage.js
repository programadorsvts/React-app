import React, { useEffect } from 'react'
import RegistroExitoso from '../components/RegistroExitoso/RegistroExitoso'
import { useParams } from 'react-router-dom';

const RegistroExitosoPage = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  let { userId } = useParams()

  useEffect(() => {
    console.log(userId)
  }, [userId])

  return (
    <>
      <RegistroExitoso></RegistroExitoso>
    </>
  )
}

export default RegistroExitosoPage