import React, { useReducer } from 'react';
import { LOGIN_ACTION } from './actionTypes';
import ProyectoContext from './contexts';
import PelisReducer from './pelisReducer';

const PelisState = props => {
    const initialState = {
        login:false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(PelisReducer,initialState);

    const setLogin = () => {
        dispatch({
            type: LOGIN_ACTION
        })
    }

    return (
        <ProyectoContext.Provider 
            value={{
                state,
                setLogin
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default PelisState;