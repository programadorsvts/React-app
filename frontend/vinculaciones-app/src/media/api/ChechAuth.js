import Axios from 'axios';

const CheckAuth = ()=> {
    Axios.get('api/checkAuth')
}

export default CheckAuth