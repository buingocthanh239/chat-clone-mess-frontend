import axios from "axios"
import { GET_FRIENDS_SUCCESS, GET_FRIENDS_ERROR } from "../types/messengerType"

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
        console.log(err)
        dispatch({
            type: GET_FRIENDS_ERROR, 
            payload : {
                errorMessage: err.response.data.error.errorMessage
            }
        })
    }
}