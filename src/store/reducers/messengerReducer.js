import { GET_FRIENDS_ERROR, GET_FRIENDS_SUCCESS, CLEAR_ERROR_MESSAGE, GET_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_SUCCESS_CLEAR } from "../types/messengerType"
const messengerState = {
    friends: [],
    messages: [],
    sendMessageSuccess: false,
    error: ''
}

export const messengerReducer = (state = messengerState, action) => {
    const { payload, type } = action 
    if (type === GET_FRIENDS_SUCCESS ) {
        return {
            ...state,
            friends: payload.friends
        }
    }

    if (type === GET_FRIENDS_ERROR) {
        return {
            ...state,
            friends: [],
            error: payload.errorMessage
        }
    }

    if(type === CLEAR_ERROR_MESSAGE) {
        return {
            ...state,
            error: ''
        }
    }

    if (type === GET_MESSAGES_SUCCESS) {
        return {
            ...state,
            messages: payload.messages
        }
    }

    if (type === SEND_MESSAGE_SUCCESS) {
        return {
            ...state,
            sendMessageSuccess: true,
            messages: [...state.messages,payload.message]
        }
    }

    if (type === SEND_MESSAGE_SUCCESS_CLEAR) {
        return {
            ...state,
            sendMessageSuccess: false
        }
    }
    return state
}