import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useSelectInput from "../../hooks/useSelectInput";
import { findMovies } from '../../service/movies';
import { Button } from '../atoms/basicComponents';

const FinderForm = ({results,setResults}) => {
    const { t, i18n } =  useTranslation();
    const filterMovies = [
        {popular: [t('popular')]},
        {now_playing: [t('now_playing')]},
        {top_rated: [t('top_rated')]},
        {upcoming: [t('upcoming')]}];
    const [filter,setShowFilters,FilterSelector] = useSelectInput(t('place_holder_filter_movies'),'genero-select',filterMovies,"");

    const finder = useCallback(async()=>{
        if(results.length > 0){
            const peliculas = await findMovies(filter,i18n.language);
            setResults(peliculas.results)
        }
    },[filter, i18n.language, results, setResults])

    useEffect(()=>{
        finder();
    },[finder])

    const handleSubmit = async e => {
        e.preventDefault();
        setShowFilters(false);
        const movies = await findMovies(filter,i18n.language);
        setResults(movies.results);
    }

    return (
        <form className='row mb-5 justify-content-center' onSubmit={handleSubmit}>
            <div className="col-sm-6 mb-md-0 mb-4 col-12">
            <FilterSelector />
            </div>
            <div className='col-sm-2 col-12 d-flex justify-content-center'>
                <Button type="submit" color="primary" width="small" className={ filter.trim().length === 0 && 'disabled' }>
                    {t('search')}
                </Button>
            </div>
        </form>
    );
}

export default FinderForm;
