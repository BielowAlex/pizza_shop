import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {pizzaService} from "../../services";

const getAll = createAsyncThunk(
    'pizzasSlice/getAll',
    async () => {
        const {data} = await pizzaService.getAll();
        return data.pizzas;
    }
);

const filter = createAsyncThunk(
    'pizzasSlice/filter',
    async (category) => {
        console.log(category)
        const {data} = await pizzaService.getAll();

        if (category!==null) {
            return data.pizzas.filter(pizza => pizza.category === category.id);
        }
            return data.pizzas;
    }
);
const sort = createAsyncThunk(
    'pizzasSlice/getAll',
    async (sortType) => {

        const {data} = await pizzaService.getAll();

        if (sortType === 0) {
            return data.pizzas.sort((a, b) => {
                return -a.rating + b.rating;
            });
        } else if (sortType === 1) {
            return data.pizzas.sort((a, b) => {
                return a.price - b.price;
            });
        } else if (sortType === 2) {
            return data.pizzas.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return 1;
                }else{
                    return -1;
                }
            });
        }

    }
);



const initialState = {
    pizzas: [],
    trash:[]
}

const pizzasSlice = createSlice({
    name: 'pizzasSlice',
    initialState,
    extraReducers: {

        [getAll.fulfilled]: (state, action) => {
            state.pizzas = action.payload;
        },
        [filter.fulfilled]: (state, action) => {
            state.pizzas = action.payload
        },
        [sort.fulfilled]: (state, action) => {
            state.pizzas = action.payload
        },

    }

});

const {reducer: pizzasReducer} = pizzasSlice;

const pizzasAction = {
    getAll,
    filter,
    sort,
}

export {
    pizzasReducer,
    pizzasAction
}