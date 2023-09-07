import {REGISTER_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, LOGIN_SUCCESS, SUCCESS_MESSAGE_CLEAR, ERROR_MESSAGE_CLEAR} from '../types/authType'
import jwtDecode from 'jwt-decode'
const authSate = {
    loading: true,
    authenticate: false,    
    error: '',
    successMessage: '',
    myInfo: ''
}

const tokenDecode = (token) => {
    const tokenDecode = jwtDecode (token);
    const expiresTime = new Date(tokenDecode.exp * 1000)
    if (new Date() > expiresTime) {
        return null
    }
    return tokenDecode
}

const getToken = localStorage.getItem('authToken');
if(getToken) {
    const getInfo = tokenDecode(getToken);
    if (getInfo) {
            authSate.myInfo = getInfo;
            authSate.authenticate = true;
            authSate.loading = false;
    }
}

export const authReducer = (state = authSate, action) => {
    const {payload, type} = action
    if (type === REGISTER_FAIL || type === LOGIN_FAIL) {
        return {
            ...state,
            error: payload.errorMessage,
            loading: true,
            authenticate: false,
            myInfo: ''
        }
    }
    if (type === REGISTER_SUCCESS) {
        return {
            ...state,
            successMessage: payload.successMessage,
            loading: false,
            authenticate: false,
            myInfo: ''
        }
    }
    if (type === LOGIN_SUCCESS) {
        const myInfo = tokenDecode(payload.token)
        return {
            ...state,
            loading: false,
            authenticate: true,
            successMessage: payload.successMessage,
            myInfo: myInfo
        }
    }
    if (type === SUCCESS_MESSAGE_CLEAR) {
        return {
            ...state,
            successMessage: ''
        }
    }

    if(type === ERROR_MESSAGE_CLEAR) {
        return {
            ...state,   
            error: ''
        }
    }
    return state
}