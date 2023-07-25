import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useSelect from "../../hooks/useSelect";
import { buscarPeliculas } from '../../service/peliculas';
import { Button } from '../atoms/basicComponents';

const BuscadorForm = ({resultados,setResultados}) => {
    const { t, i18n } =  useTranslation();
    const filtrosDePeliculas = [
        {popular: [t('popular')]},
        {now_playing: [t('now_playing')]},
        {top_rated: [t('top_rated')]},
        {upcoming: [t('upcoming')]}];
    const [filtro,setListarFiltros,SelectorDeFiltro] = useSelect(t('place_holder_filter_movies'),'genero-select',filtrosDePeliculas,"");
    
    const findMovies = useCallback(async()=>{
        console.log(resultados)
        if(resultados.length > 0){
            const peliculas = await buscarPeliculas(filtro,i18n.language);
            setResultados(peliculas.results)
        }
    },[i18n.language])

    useEffect(()=>{
        findMovies();
    },[findMovies])

    const handleSubmit = async e => {
        e.preventDefault();
        setListarFiltros(false);
        const peliculas = await buscarPeliculas(filtro,i18n.language);
        setResultados(peliculas.results);
    }

    return (
        <form className='row mb-5 justify-content-center' onSubmit={handleSubmit}>
            <div className="col-sm-6 mb-md-0 mb-4 col-12">
            <SelectorDeFiltro />
            </div>
            <div className='col-sm-2 col-12 d-flex justify-content-center'>
                <Button type="submit" color="primary" width="small" className={ filtro.trim().length === 0 && 'disabled' }>
                    {t('search')}
                </Button>
            </div>
        </form>
    );
}
 
export default BuscadorForm;