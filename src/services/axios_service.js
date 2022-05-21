import axios from "axios";

const baseURL = 'http://localhost:3000';

const AxiosService = axios.create({baseURL});

export {AxiosService};