import React from 'react';
import { useTranslation } from 'react-i18next';
import { movieFinder } from '../../../configuration/serviceConfig';
import { Button } from '../basicComponents';
import styles from "./card.module.css";

const MovieCard = ({movieInfo,className}) => {
    const { t } = useTranslation();

    const handleMore = ()=>{
        //TODO: redireccionar a otra vista donde se muestre la sinopsis completa de la pelicula y tenga un Slider con los Poster de la peli
    }

    return (
        <div className={className}>
            <div className={styles["custom-card-wrap"]}>
                <div className={styles["custom-card-inner"]}>
                    <div className={styles["custom-card-front"]}>
                        <img src={movieFinder.baseUrlImg+movieInfo.poster_path}
                            alt={movieInfo.title} />
                        <div className={styles["custom-card-body"]}>
                            <div className='d-flex flex-column'>
                                <span className={styles["card-subtitle"]}>
                                    {movieInfo.release_date}
                                </span>
                                <span className={styles["card-title"]}>
                                    {movieInfo.title}
                                </span>
                            </div>
                            <span className={styles["block-ellipsis"]}>
                                { movieInfo.overview !== ""
                                ? movieInfo.overview
                                : t('no_synopsis') }
                            </span>
                        </div>
                    </div>
                    <div className={styles["custom-card-back"]}>
                        <img src={movieFinder.baseUrlImg+movieInfo.backdrop_path}
                            alt={movieInfo.title} />
                        <div className={styles["custom-card-body"]}>
                            <span className={styles["card-subtitle"]}>
                                {t('original_title')}
                            </span>
                            <span className={styles["card-title"]}>
                                {movieInfo.original_title}
                            </span>
                            <span className={styles["card-subtitle"]}>
                                {t('original_language')}
                            </span>
                            <span className={styles["card-title"]}>
                                {movieInfo.original_language}
                            </span>
                        </div>
                        <div className={styles["custom-card-footer"]}>
                        <Button color="transparentSecondary" width="small" onClick={handleMore}>{t('more')}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
