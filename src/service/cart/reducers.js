import types from "./types";

const INITIAL_STATE = {
    cart: [
        {
            id:1,
        },
        {
            id:2,
        },
        {
            id:3,
        }
    ]
}

const cartReducer =(state = INITIAL_STATE, action) =>{
    switch (action.type){
        case types.ADD_TO_CART:{
            return {
                ...state, cart: [...state.cart, {id: action.item.id}]
            }
        }
        case types.REMOVE_FROM_CARD:{
            const index = action.item
            return {
                ...state, cart: state.cart.filter((product,indexArray) => indexArray !== index )
            }
        }
        default:
            return state
    }
}

export default cartReducer

