const ADD_WISH_LIST = "ADD_WISH_LIST";
const REMOVE_WISH_LIST = "REMOVE_WISH_LIST";


export const addToWishList = (name) => {
    return {
        type: ADD_WISH_LIST,
        payload: name
    }
}

export const removeFromWishList = (id) => {
    return {
        type: REMOVE_WISH_LIST,
        payload: id
    }
}