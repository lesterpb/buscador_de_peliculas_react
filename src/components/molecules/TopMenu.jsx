import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MovieContext } from '../../contexts/movieProvider';
import OutsideAlerter from '../../hooks/useOutsideAlerter';
import { ListMenu, NavBar } from '../atoms/basicComponents';

const TopMenu = ({companyName=""}) => {

    const [isVisible, setIsVisible] = useState(false);
    const { t,i18n } = useTranslation();

    const {state,setLogin} = useContext(MovieContext);

    const toggleMenu = () => setIsVisible(!isVisible);

    const changeLanguage = () => {
        console.log(i18n.language );
        i18n.language === "es-ES" ? i18n.changeLanguage("en-US") : i18n.changeLanguage("es-ES");
        console.log(i18n.language );
        toggleMenu();
    }

    const Autentication = () => {
        setLogin();
        toggleMenu();
    }

    const handleClickOutside = ()=>{
        setIsVisible(prevValue => prevValue && false);
    }

    return (
        <NavBar>
            <div className="d-flex justify-content-start">
                <span>
                    {/*dentro del span va la imagen SVG del logo*/}
                </span>
                <span>{companyName !== "" && companyName}</span>
            </div>
            <OutsideAlerter action={handleClickOutside}>
                <div className="list-menu">
                    <svg onClick={toggleMenu} style={{'cursor':'pointer'}} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="9" r="3" stroke="#FFFFFF" strokeWidth="1.5"/>
                        <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <ListMenu id="user_options" isVisible={isVisible}>

                        <li onClick={()=>changeLanguage()}>
                            <div className='item'>
                                <span className='text'>{t('change_language')}</span>
                            </div>
                        </li>
                        { state.login &&
                            (<li onClick={toggleMenu}>
                                <div className='item'>
                                    <span className='text'>{t('favorites')}</span>
                                </div>
                            </li>)
                        }
                        { state.login &&
                            (<li onClick={toggleMenu}>
                                <div className='item'>
                                    <span className='text'>{t('profile')}</span>
                                </div>
                            </li>)
                        }
                        <li onClick={Autentication}>
                            <div className='item'>
                                { !state.login
                                    ? (
                                        <span className='text'>{t('login')}</span>
                                    )
                                    : (
                                        <span className='text'>{t('logout')}</span>
                                    )
                                }
                            </div>
                        </li>
                        { !state.login
                            && (
                                <li onClick={toggleMenu}>
                                    <div className='item'>
                                        <span className='text'>{t('sign_in')}</span>
                                    </div>
                                </li>
                            )
                        }

                    </ListMenu>
                </div>
            </OutsideAlerter>
        </NavBar>
    );
}

export default TopMenu;
