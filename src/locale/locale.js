import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    "en-US": {
        translation: {
            title: 'Movie finder',
            change_language: "Change to Spain",
            favorites: 'Favorites',
            profile: 'Profile',
            login: 'Log in',
            logout: 'Logout',
            sign_in:'Sign in',
            search: 'Search',
            place_holder_filter_movies: 'Filter movies',
            popular: 'Populars',
            now_playing: 'Now playing',
            top_rated: 'Top rated',
            upcoming: 'Upcoming',
            more: 'More',
            less: 'Less',
            original_title: 'Original title',
            original_language: 'Original language',
            no_synopsis: "There isn't  sinopsis in English"
        }
    },
    'es-ES': {
        translation: {
            title: 'Buscador de películas',
            change_language: "Cambiar a Inglés",
            favorites: 'Ver Favorito',
            profile: 'Perfil',
            login: 'Iniciar Sesión',
            logout: 'Cerrar Sesión',
            sign_in:'Registrarse',
            search: 'Buscar',
            place_holder_filter_movies: 'Filtar películas',
            popular: 'Populares',
            now_playing: 'De estreno',
            top_rated: 'Mejor votadas',
            upcoming: 'Por estrenar',
            more: 'Ver más',
            less: 'Ver menos',
            original_title: 'Título original',
            original_language: 'Idioma original',
            no_synopsis: "No hay sinopsis en Español"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es-ES',
        lng: 'en-US',
        interpolation:{
            escapeValue: false
        }
    });

export default i18n;
