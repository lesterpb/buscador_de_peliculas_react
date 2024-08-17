import React, { createContext, useReducer } from 'react';
import { LOGIN_ACTION, SET_MOVIES_FILTER } from './movieActionTypes';
import MovieReducer from './movieReducer';

export const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const initialState = {
        login:false,
        moviesFilter: '',
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(MovieReducer,initialState);

    const setLogin = () => {
        dispatch({
            type: LOGIN_ACTION
        })
    };

    const setMoviesFilter = filter => {
        dispatch({
            type: SET_MOVIES_FILTER,
            payload: filter
        })
    };

    return (
        <MovieContext.Provider
            value={{
                state,
                setLogin,
                setMoviesFilter
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;
