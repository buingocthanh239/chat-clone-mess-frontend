import { GET_FRIENDS_ERROR, GET_FRIENDS_SUCCESS, CLEAR_ERROR_MESSAGE } from "../types/messengerType"
const messengerState = {
    friends: [],
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
    return state
}