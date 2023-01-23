import React  from "react";
import { useState,useContext } from "react";
import Axios  from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const LoginContext =React.createContext();
const LogOutContext =React.createContext();
const AuthUserContext =React.createContext();
 

export const useLoginContext= ()=>{
    return useContext (LoginContext );
}
export const useLogOutContext= ()=>{
    return useContext (LogOutContext );
}
export const useAuthUserContext= ()=>{
    return useContext (AuthUserContext );
}

export function LoginProvider( {children } ){

     const [auth, setAuth] = useState(null);
     const navigate = useNavigate();

     /////////////////User Auth/////////////////////////////////
    const  AuthUser= ()=> {

                Axios.get('/api/checkAuth')
                .then((response) =>{
                    setAuth(true);
                    console.log(response);
                   
                })
                .catch((error) =>{
                   setAuth(false);
                    console.log(error);
                   
                })   
                return auth
           }          
     /////////////////////////////////////////////////////////////
      
     ///////////////////Log In///////////////////////////////////
     const LogUser = (props) => {
        Axios.post('/api/login', { "email": props.email,"password": props.password})
        .then((response) => {
          console.log(response);
          localStorage.setItem('local-email', props.email);
          localStorage.setItem('local-token', response.data.token);
          Swal.fire ({ icon: 'success', title: 'Sesion Iniciada Correctamente', showConfirmButton: false, timer: 2000 });
          navigate("/");
        })
         .catch((error) => {
        console.log(error)
        })
    }
     /////////////////////////////////////////////////////////////

     /////////////////Login Out/////////////////////////////////
    const LogOutUser = () => {
        return(  
            Axios.post("/api/logout").then((response) => {

            localStorage.removeItem("local-token")
            localStorage.removeItem("local-email")
            setAuth(false);
            })
            
            .catch((error) => {
            console.log(error)
            }))
    }
    ///////////////////////////////////////////////////////////
  
    return(
        <LoginContext.Provider value={LogUser}>
            <AuthUserContext.Provider value={AuthUser}>
                  <LogOutContext.Provider value={LogOutUser}>
                   {children}
            </LogOutContext.Provider>
            </AuthUserContext.Provider>
        </LoginContext.Provider>
    );
  }

  

  