import axios from "axios";

const baseURL = 'https://bielowalex.github.io/portfolio/';

const AxiosService = axios.create({baseURL});

export {AxiosService};
