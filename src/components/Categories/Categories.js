import React, {useState,useEffect} from 'react';
// import {pizzasAction} from "../../redax";

const Categories = ({setCategory}) => {
    const [catActive, setCatActive] = useState(null);

    const cat = [

        {id: 1, name: 'Vegetarian'},
        {id: 2, name: 'Grill'},
        {id: 3, name: 'Spicy'},
        {id: 4, name: 'Mix'},
    ];

    const selectCategory = async (cat)=>{
        await cat===null?setCatActive(null):setCatActive(cat.id);
        console.log(catActive);
        setCategory(cat);
    }


    return (
        <div className="categories">
            <ul>
                <li onClick={() => selectCategory(null)}
                    className={catActive === null ? 'active' : ''}>All
                </li>
                {cat.map(category => <li onClick={()=>selectCategory(category)}
                                         className={catActive === category.id ? 'active' : ''}
                                         key={category.id}>{category.name}</li>)}
            </ul>
        </div>
    );
};

export {Categories};
