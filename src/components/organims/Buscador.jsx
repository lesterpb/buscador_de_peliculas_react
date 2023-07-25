import React, { useState } from 'react';
import BuscadorForm from '../molecules/BuscadorForm.jsx';
import CardsList from '../molecules/CardsList/CardsList.jsx';

const Buscador = () => {
    const [resultados, setResultados] = useState([]);
    
    return (
        <>
            <BuscadorForm resultados={resultados} setResultados={setResultados}/>
            <CardsList list={resultados}/>
        </>
    );
}
 
export default Buscador;