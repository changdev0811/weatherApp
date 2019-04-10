import isValid from '../utils/isValid';

const initialState = {
    isAuthenticated: false,
    isRegisterSuccess: false,
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'REGISTER_SUCCESS': 
            return {
                ...state,
                isRegisterSuccess: true
            }
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: !isValid(action.payload),
                user: action.payload
            }
        default: 
            return state;
    }
}