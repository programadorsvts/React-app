import Axios from 'axios';


function CrearProyecto = ( ) =>{
  
        Axios.post('http://127.0.0.1:8000/api/user/proyects')
        .then(response =>{
            console.log(response);
            })
        .catch{

        }
}

export  { CrearProyectos }