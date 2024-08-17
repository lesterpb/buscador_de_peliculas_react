import { LOGIN_ACTION, SET_MOVIES_FILTER } from "./movieActionTypes";

const MovieReducer = (state, action) => {
    switch(action.type){
        case LOGIN_ACTION:
            return {
                    ...state,
                    login: !state.login
                };
        case SET_MOVIES_FILTER:
            return {
                ...state,
                moviesFilter: action.payload
            }
        default: return state;
    }
};

export default MovieReducer;
