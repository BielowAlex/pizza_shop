import axios from "axios";

const baseURL = 'https://pizza-react-psi.vercel.app/';

const AxiosService = axios.create({baseURL});

export {AxiosService};