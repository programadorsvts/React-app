import Axios from "axios";

const ObtenerProyectos = () => {
  return Axios.get("http://127.0.0.1:8000/api/user/proyects");
};

export { ObtenerProyectos };
