import React, { createContext, useReducer } from 'react';
import { LOGIN_ACTION } from './movieActionTypes';
import MovieReducer from './movieReducer';

export const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const initialState = {
        login:false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(MovieReducer,initialState);

    const setLogin = () => {
        dispatch({
            type: LOGIN_ACTION
        })
    }

    return (
        <MovieContext.Provider
            value={{
                state,
                setLogin
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;
