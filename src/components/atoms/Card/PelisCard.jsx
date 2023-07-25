import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { buscadorPelis } from '../../../configuration/serviceConfig';
import { Button } from '../basicComponents';
import styles from "./card.module.css";

const PelisCard = ({peliculaInfo,className}) => {
    const { t } = useTranslation();
    const [more, setMore] = useState(false);

    const handleMore = ()=>{
        setMore( value => !value );
    }

    return (
        <div className={className}>
            <div className={`${styles["custom-card-wrap"]} ${more && styles["more"]}` }>
                <div className={styles["custom-card-front"]}>
                    <img src={buscadorPelis.baseUrlImg+peliculaInfo.poster_path}
                        alt={peliculaInfo.title} />
                    <div className={styles["custom-card-body"]}>
                        <div className='d-flex flex-column'>
                            <span className={styles["card-subtitle"]}>
                                {peliculaInfo.release_date}
                            </span>
                            <span className={styles["card-title"]}>
                                {peliculaInfo.title}
                            </span>
                        </div>
                        <span className={styles["block-ellipsis"]}>
                            { peliculaInfo.overview !== "" 
                            ? peliculaInfo.overview
                            : t('no_synopsis') } 
                        </span>
                    </div>
                </div>
                <div className={styles["custom-card-back"]}>
                    <img src={buscadorPelis.baseUrlImg+peliculaInfo.backdrop_path}
                        alt={peliculaInfo.title} />
                    <div className={styles["custom-card-body"]}>
                        <span className={styles["card-subtitle"]}>
                            {t('original_title')}
                        </span>
                        <span className={styles["card-title"]}>
                            {peliculaInfo.original_title}
                        </span>
                        <span className={styles["card-subtitle"]}>
                            {t('original_language')}
                        </span>
                        <span className={styles["card-title"]}>
                            {peliculaInfo.original_language}
                        </span>
                    </div>
                    <div className={styles["custom-card-footer"]}>
                    {/* <Button color="transparentSecondary" width="small">transparentSecondary</Button> */}
                    <Button color="transparentSecondary" 
                            width="auto"
                            onClick={handleMore}>{t('more')}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PelisCard;