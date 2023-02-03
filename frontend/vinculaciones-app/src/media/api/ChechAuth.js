import Axios from "axios";

const CheckAuth = () => {
  var auth = false;
  Axios.get("/sanctum/csrf-cookie").then((response) => {
    Axios.get("http://127.0.0.1:8000/api/checkAuth")
      .then((response) => {
        console.log(response);
        auth = true;
        return auth;
      })
      .catch(function (error) {
        console.log(error);
        auth = false;
        return auth;
      });
  });
};

export default CheckAuth;
