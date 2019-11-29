import * as actionTypes from '../actions/actionTypes';

const initialState = {
    login: {
        loginResponse: null,
        loading: false,
    },
    register: {
        registerResponse: null,
        loading: false,
    },
    authStatus: false,
};

const loginStart = (state, action) => {
    const updateObject = {
        authStatus: false,
        login: {
            loginResponse: null,
            loading: true,
        }
    }
    return { ...state, ...updateObject };
};

const userlogined = (state, action) => {
    const updateObject = {
        authStatus: true
    }
    return { ...state, ...updateObject };
};

const loginSuccess = (state, action) => {
    const updateObject = {
        authStatus: true,
        login: {
            loginResponse: action.response,
            loading: false,
        }
    }
    return { ...state, ...updateObject };
};

const loginFail = (state, action) => {
    const updateObject = {
        authStatus: false,
        login: {
            loginResponse: action.error,
            loading: false,
        }
    }
    return { ...state, ...updateObject };
};

const registerStart = (state, action) => {
    const updateObject = {
        authStatus: false,
        register: {
            registerResponse: null,
            loading: true,
        }
    }
    return { ...state, ...updateObject };
};

const registerSuccess = (state, action) => {
    const updateObject = {
        authStatus: true,
        register: {
            registerResponse: action.response,
            loading: false,
        }
    }
    return { ...state, ...updateObject };
};

const registerFail = (state, action) => {
    const updateObject = {
        authStatus: false,
        register: {
            registerResponse: action.error,
            loading: false,
        }
    }
    return { ...state, ...updateObject };
};

const logout = (state, action) => {
    const updateObject = initialState;
    return { ...state, ...updateObject };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGINED: return userlogined(state, action);
        case actionTypes.LOGIN_USER: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.REGISTER_USER: return registerStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.LOGOUT_USER: return logout(state, action);
        default:
            return state;
    }
};

export default reducer;