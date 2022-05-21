import React, {useEffect, useState} from 'react';
import {Categories, PizzaCart, Sort} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {pizzasAction} from "../../redax";


const Home = () => {
    const [category, setCategory] = useState(null);
    const [sort, setSort] = useState(0);
    const {pizzas} = useSelector(state => state.pizzas);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pizzasAction.getAll());

    }, []);

    useEffect(() => {
        dispatch(pizzasAction.filter(category));
    }, [category]);
    useEffect(() => {
        dispatch(pizzasAction.sort(sort));
    }, [sort]);
    return (
        <div className="container">
            <div className="content__top">
                <Categories setCategory={setCategory}/>
                <Sort setSort={setSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas && pizzas.map(pizza =>
                    <PizzaCart key={pizza.id} pizza={pizza}/>)
                }
            </div>
        </div>
    );
};

export {Home};
