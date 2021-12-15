import {createStore, combineReducers, applyMiddleware} from "redux";
import CategoryReducer from "./reducer/CategoryReducer";
import BreadReducer from "./reducer/BreadsReducers";
import thunk from "redux-thunk";
import CartReducer from "./reducer/CartReducer";
import AuthReducer from "./reducer/AuthReducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer,
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))
