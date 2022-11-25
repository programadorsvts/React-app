import Axios from 'axios';


const CheckAuth = ()=> {
    
    Axios.get('http://127.0.0.1:8000/api/checkAuth')
          .then(response => {
              console.log(response);
                return true
          })
          .catch(function (error) {
              console.log(error);
              return false
          })
        

}

export default CheckAuth