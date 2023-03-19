import Axios from 'axios';


const PostCrearProyecto = ( ) =>{
  
        Axios.post('http://127.0.0.1:8000/api/user/proyects')
        .then(response =>{
            console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
}

export default PostCrearProyecto 