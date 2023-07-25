import { LOGIN_ACTION } from "./actionTypes";

const PelisReducer = (state, action) => {
    switch(action.type){
        case LOGIN_ACTION: 
                return {
                        ...state,
                        login: !state.login
                    };
        default: return state;
    }
};

export default PelisReducer;