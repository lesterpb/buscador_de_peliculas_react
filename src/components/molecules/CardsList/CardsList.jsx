import React from 'react';
import MovieCard from '../../atoms/Card/MovieCard';
import "./list.module.css";

const CardsList = ({list}) => {

    //TODO: implementar scroll infinito utilizando las mejores practicas en React para esta funcionalidad
    return (
        <div className='row m-0'>
            {
                list.map((item,pos)=>( <MovieCard
                                        movieInfo={item}
                                        className="col-xl-3 col-md-4 col-sm-6 col-xs-12 px-lg-5 px-md-4 px-3 py-md-4 py-3"
                                        key={pos} />))
            }
        </div>
    );
}

export default CardsList;
