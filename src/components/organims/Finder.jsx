import React, { useState } from 'react';
import CardsList from '../molecules/CardsList/CardsList.jsx';
import FinderForm from '../molecules/FinderForm.jsx';

const Finder = () => {
    const [results, setResults] = useState([]);

    return (
        <>
            <FinderForm results={results} setResults={setResults}/>
            <CardsList list={results}/>
        </>
    );
}

export default Finder;
