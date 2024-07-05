import { LOGIN_ACTION } from "./movieActionTypes";

const MovieReducer = (state, action) => {
    switch(action.type){
        case LOGIN_ACTION:
                return {
                        ...state,
                        login: !state.login
                    };
        default: return state;
    }
};

export default MovieReducer;
