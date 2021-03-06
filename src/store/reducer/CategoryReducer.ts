import {CATEGORIES} from "../../data/Categories";
import {SELECT_CATEGORY} from "../actions/CategoryActions";

const initialState = {
    categories: CATEGORIES,
    selected: null
}

const CategoryReducer = (state = initialState, action) =>{
    switch (action.type){
        case SELECT_CATEGORY:
            const indexCategory = state.categories.findIndex(cat => cat.id === action.categoryID)
            if (indexCategory === -1) return state
            return {...state, selected: state.categories[indexCategory]}
        default:
            return state
    }
}

export default CategoryReducer
