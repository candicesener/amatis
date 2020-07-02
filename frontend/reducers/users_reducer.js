import {
    RECEIVE_USER,
    RECEIVE_USER_ERRORS
} from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_USER:
            newState = Object.assign({},
                { [action.payload.user.id]: action.payload.user });
            return newState;
        case RECEIVE_USER_ERRORS:
            return action.errors;
        default:
            return state;
    }

};

export default usersReducer;
