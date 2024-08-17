import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MovieContext } from '../../contexts/movieProvider';
import images from '../../helpers/svg_images.json';
import useSelectInput from "../../hooks/useSelectInput";
import Svg from '../atoms/Svg';
import { Button } from '../atoms/basicComponents';

const FinderForm = () => {
    const { t } =  useTranslation();
    const {find} = images;
    const { setMoviesFilter } = useContext(MovieContext);
    const filterMovies = [
        {popular: [t('popular')]},
        {now_playing: [t('now_playing')]},
        {top_rated: [t('top_rated')]},
        {upcoming: [t('upcoming')]}];
    const [filter,setShowFilters,FilterSelector] = useSelectInput(t('place_holder_filter_movies'),'genero-select',filterMovies,"");

    const handleSubmit = e => {
        e.preventDefault();
        setMoviesFilter(filter);
        console.log('Se dio clik al boton Submit dle formulario de busqueda')
        setShowFilters(false);
    }

    return (
        <form className='row mb-5 justify-content-center' onSubmit={handleSubmit}>
            <div className="col-sm-6 mb-md-0 mb-4 col-12">
            <FilterSelector />
            </div>
            <div className='col-sm-2 col-12'>
                <Button type="submit" color="primary" className={ filter.trim().length === 0 && 'disabled' }>
                    <span className='d-flex flex-row justify-content-around gap-1'>
                <Svg width="18" height="18" viewBox="0 0 18 18" img={find} />
                        {t('search')}
                    </span>
                </Button>
            </div>
        </form>
    );
}

export default FinderForm;
