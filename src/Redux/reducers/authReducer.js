const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_ERROR':
            console.log('signout error', action.err);
            return {
                ...state,
                authError: 'signout failed'
            };
        case'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            };
        case'SIGNUP_ERROR':
            console.log('signup error', action.err);
            return {
                ...state,
                authError: 'signup failed'
            };
        case 'LOGIN_ERROR':
            console.log('login failed', action.err);
            return {
                ...state,
                authError: 'login failed'
            }
        default:
            return state;
    }
}

export default authReducer;