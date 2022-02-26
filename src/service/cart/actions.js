import types from "./types";

const add = item => ({
    type: types.ADD_TO_CART, item
})

const remove = item => ({
    type: types.REMOVE_FROM_CARD, item
})

export  default {
    add,
    remove
}
