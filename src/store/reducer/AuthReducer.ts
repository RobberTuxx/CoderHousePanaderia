import {SIGNUP} from "../actions/AuthReducer";

const INITIAL_STATE = {
    token: null,
    userId: null
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                token: action.toke,
                userId: action.userId
            }
        default:
            return state
    }
}

export default AuthReducer
