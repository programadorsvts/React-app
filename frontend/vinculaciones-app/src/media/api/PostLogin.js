import Axios from "axios";

const PostLogin = (data, redirect) => {
  Axios.get("/sanctum/csrf-cookie").then((response) => {
    Axios.post("http://127.0.0.1:8000/api/login", {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        localStorage.setItem("local-email", data.email);
        localStorage.setItem("local-token", response.data.token);
        return redirect("/");
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
  });
};

export default PostLogin;
