import axios from 'axios'
import {REGISTER_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, LOGIN_SUCCESS} from '../types/authType'

const BASE_URL = "http://localhost:5000"

export const userRegister = (data) => {
    return async (dispatch) => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const respone = await axios.post(BASE_URL+'/api/messenger/register', data, config)
            dispatch({
                type: REGISTER_SUCCESS, 
                payload: {
                    successMessage: respone.data.successMessage
                }
            })
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: {
                    errorMessage: err.response.data.error.errorMessage
                }
            })
        }
    }
}

export const userLogin = (data) => {
    return async (dispatch) => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const respone = await axios.post(BASE_URL+'/api/messenger/login', data, config)
            localStorage.setItem('authToken', respone.data.token)
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: {
                    successMessage: respone.data.successMessage,
                    token: respone.data.token
                }
            })
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: {
                    errorMessage: err.respone.data.error.errorMessage
                }
            })
        }
    }
}