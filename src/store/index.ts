import {createStore, combineReducers} from "redux";
import CategoryReducer from "./reducer/CategoryReducer";
import BreadReducer from "./reducer/BreadsReducers";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer
})

export default createStore(RootReducer)
