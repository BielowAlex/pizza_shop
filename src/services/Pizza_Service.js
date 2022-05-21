import {AxiosService} from "./axios_service";

const pizzaURL='pizza_db.json';

const pizzaService ={
    getAll:()=>AxiosService.get(pizzaURL),
}

export {pizzaService};