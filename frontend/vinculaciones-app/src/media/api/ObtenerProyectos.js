import Axios from 'axios';
import {useState} from 'react';

function ObtenerProyectos = ( )=>{
  
        Axios.get('http://127.0.0.1:8000/api/user/proyects')
                .then(response =>{
                    console.log(response);
                 })
}






    export  { ObtenerProyectos }