import cartReducer from "./service/cart";
import {combineReducers} from "redux";
import productsReducer from "./service/products";
import categoriesReducer from "./service/categories";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer
})

export default rootReducer
