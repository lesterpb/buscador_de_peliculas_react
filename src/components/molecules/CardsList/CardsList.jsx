import React from 'react';
import PelisCard from '../../atoms/Card/PelisCard';
import "./list.module.css";

const CardsList = ({list}) => {

    return ( 
        <div className='row m-0'>
            {
                list.map((item,pos)=>( <PelisCard
                                        peliculaInfo={item}
                                        className="col-xl-3 col-md-4 col-sm-6 col-xs-12 px-lg-5 px-md-4 px-3 py-md-4 py-3" 
                                        key={pos} />))
            }
        </div> 
    );
}
 
export default CardsList;