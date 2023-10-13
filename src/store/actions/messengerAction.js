import axios from "axios"
import { GET_FRIENDS_SUCCESS, GET_FRIENDS_ERROR,SEND_MESSAGE_ERROR, SEND_MESSAGE_SUCCESS, GET_MESSAGES_SUCCESS, GET_MESSAGE_ERROR } from "../types/messengerType"

const BASE_URL = "http://localhost:5000"

axios.defaults.withCredentials = 'include';
export const getFriends =  () => async  dispatch => {
    const config = {
        header: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const responese = await axios.get(BASE_URL + '/api/messenger/users', config)
        dispatch({
            type: GET_FRIENDS_SUCCESS ,
            payload: {
                successMessage: responese.data.successMessage,
                friends: responese.data.data
            }
        })
    } catch (err) {
        dispatch({
            type: GET_FRIENDS_ERROR, 
            payload : {
                errorMessage: err.response.data.error.errorMessage
            }
        })
    }
}

export const getMessage = (friendId) => async dispatch => {
    try {
        const responese = await axios.get(BASE_URL + '/api/messenger/get-messages/' + friendId)
        dispatch({
            type: GET_MESSAGES_SUCCESS ,
            payload: { 
                messages: responese.data.data
            }
        })
    } catch (err) {
        dispatch({
            type: GET_MESSAGE_ERROR, 
            payload : {
                errorMessage: err.response.data.error.errorMessage
            }
        })
    }
}

export const sendMessage = (data) => async dispatch => {
    try {
        const responese = await axios.post(BASE_URL + '/api/messenger//send-message', data);
        dispatch({
            type: SEND_MESSAGE_SUCCESS,
            payload: {
                message: responese.data.message
            }
        })
    } catch (err) {
        dispatch({
            type: SEND_MESSAGE_ERROR,
            payload: err.response.data.error.errorMessage
        })
    }
}

export const sendImage = (data) => async dispatch => {
    try {
        const responese = await axios.post(BASE_URL + '/api/messenger/send-image', data);
        dispatch({
            type: GET_MESSAGES_SUCCESS,
            payload: {
                messages: responese.data.data
            }
        })
    } catch (err) {
        dispatch({
            type: SEND_MESSAGE_ERROR,
            payload: err.response.data.error.errorMessage
        })
    }
}