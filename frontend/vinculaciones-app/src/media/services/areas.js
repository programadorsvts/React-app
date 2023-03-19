import Axios from "axios";
import { API_URL } from "../../config/env";

export const getAreas = () => {
  // return Axios.get( API_URL + "sanctum/csrf-cookie").then((response) => {
   return Axios.get(API_URL + "api/area")
  // });
};