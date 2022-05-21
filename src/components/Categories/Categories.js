import React, {useState,useEffect} from 'react';
// import {pizzasAction} from "../../redax";

const Categories = ({setCategory}) => {
    const [catActive, setCatActive] = useState(null);

    const cat = [

        {id: 1, name: 'Вегетарианская'},
        {id: 2, name: 'Гриль'},
        {id: 3, name: 'Острые'},
        {id: 4, name: 'Закрытые'},
    ];

    const selectCategory = async (cat)=>{
        await setCatActive(cat);
        console.log(catActive);
        setCategory(cat);

    }


    return (
        <div className="categories">
            <ul>
                <li onClick={() => selectCategory(null)}
                    className={catActive === null ? 'active' : ''}>Все
                </li>
                {cat.map(cat => <li onClick={()=>selectCategory(cat.id)}
                                    className={catActive === cat.id ? 'active' : ''}
                                    key={cat.id}>{cat.name}</li>)}
            </ul>
        </div>
    );
};

export {Categories};
