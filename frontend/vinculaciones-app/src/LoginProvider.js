import React  from "react"
import { useState,useContext} from "react"
import Axios  from "axios"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Loader from './media/components/Loader/Loader'
import { API_URL } from "./config/env"

const LoginContext =React.createContext();
const LogOutContext =React.createContext();
const AuthUserContext =React.createContext();
const SingUpUserContext=React.createContext();

 
export const useLoginContext=()=>{
    return useContext (LoginContext );
}
export const useLogOutContext=()=>{
    return useContext (LogOutContext );
}
export const useSingUpUserContext=()=>{
    return useContext(SingUpUserContext);
}
export const useAuthUserContext=()=>{
    return useContext (AuthUserContext );
}

export function LoginProvider( {children } ){
    
    const [auth, setAuth] = useState(null);
    const [errorSubmit, setErrorSubmit] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    
     /////////////////User Auth/////////////////////////////////
    const AuthUser= ()=> {
                Axios.get(API_URL + 'sanctum/csrf-cookie' ).then(response => {
                        Axios.get(API_URL + 'api/checkAuth' )
                        .then((response) => {
                            setAuth(true);
                        })
                        .catch((error)=> {
                            setAuth(false);
                        })
                    }); 
                return auth;
    }       
     /////////////////////////////////////////////////////////////
      
     ///////////////////Log In///////////////////////////////////
     const LogUser = (email,password) => {
            setLoading(true)
            Axios.post(API_URL + 'api/login', { "email":email,"password": password})
            .then((response) => {
                localStorage.setItem('local-email', email);
                localStorage.setItem('local-token', response.data.token);
                setLoading(false)
                Swal.fire ({ icon: 'success', title: 'Sesion Iniciada Correctamente', showConfirmButton: false, timer: 2000 });
                navigate("/");
            })
            .catch((error) => {
                    setLoading(false)
                    Swal.fire({
                        icon: 'error',
                        text: error.response.data.message  ,
                    })
                setErrorSubmit(error)
            })
         return errorSubmit
    }
     /////////////////////////////////////////////////////////////

    ///////////////////Sing Up///////////////////////////////////
     const SingUpUser = (email,password,confir) => {
        Axios.get(API_URL + 'sanctum/csrf-cookie' ).then((response) => {
                setLoading(true)
              Axios.post(API_URL + "api/register",{
                "email": email,
                "password": password,
                "confirm_password": confir,
              })
              .then( (response ) => {
                setLoading(false)
                Swal.fire ({ icon: 'success', title: 'Registro Exitoso - Enviamos un mail de verificacion de cuenta', showConfirmButton: true, timer: 6000 })
                navigate("/");
           
              })
              .catch((error)=> {
                 setLoading(false)
                Swal.fire({ icon: 'error', text: error.response.data.message})
                setErrorSubmit(error)
              })
        });     
    }
     /////////////////////////////////////////////////////////////

    /////////////////Login Out/////////////////////////////////
    const LogOutUser = (sumiterror) => { 
        Axios.get(API_URL + 'sanctum/csrf-cookie' ).then(response => {
            setLoading(true)
            Axios.post(API_URL + "api/logout")
            .then((response) => {
                localStorage.removeItem("local-token")
                localStorage.removeItem("local-email")
                setAuth(false);
                setLoading(false)
                Swal.fire ({ icon: 'warning', title: 'Sesion Cerrada', showConfirmButton: false, timer: 2000 });
                navigate("/LoginPage");
            })
            .catch((error) => {
                setLoading(false)
                Swal.fire({ icon: 'error', text: error })
            })    
        });    
    }
    ///////////////////////////////////////////////////////////


    return(
        <>
            {loading && <Loader/>}
            <LoginContext.Provider value={LogUser}>
                <SingUpUserContext.Provider value={SingUpUser}>
                    <AuthUserContext.Provider value={AuthUser}>
                    <LogOutContext.Provider value={LogOutUser}>
                                 {children}
                    </LogOutContext.Provider>
                    </AuthUserContext.Provider>
                </SingUpUserContext.Provider>    
            </LoginContext.Provider>
      </>  
    );
  }

  

  