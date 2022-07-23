import React from 'react';

import data from './Mock/Main';
import "./main.css"
import { useState } from 'react';

const Isotope = () =>{
    const[items,setItem]= useState(data);

    const FilterJs = (category) =>{
        const update = data.filter((index)=>index.category === category);
        setItem (update);
    };
return(
    <div>
        <div style={{display:"flex",justifyContent: "center",alignItems:'center',gap:20,margin:'30px 0px'}}>
            <button onClick={()=> setItem(data)}>All</button>
            <button onClick={()=> FilterJs("Man")}>Man</button>
            <button onClick={()=> FilterJs("Woman")}>Woman</button>
            <button onClick={()=> FilterJs("Kids")}>Kids</button>

        </div>

        <div className="container mt-3">
            <div className="row ">
                {
                    items.map((el,id)=>(
                        <div className="col-lg-3 mt-3" key={id}>
                            <img src={el.images} alt="" />
                            <h5>{el.name}</h5>
                            <p>{el.info}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)
}

export default Isotope