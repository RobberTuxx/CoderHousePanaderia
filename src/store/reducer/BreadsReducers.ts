import {BREADS} from "../../data/Breads";
import {FILTERED_BREAD, SELECT_BREAD} from "../actions/BreadAction";

const initialState = {
    breads: BREADS,
    filteredBreads: [],
    selected: null
}

const BreadReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BREAD:
            return {
                ...state,
                selected: state.breads.find(bread => bread.id === action.breadID)
            }
        case FILTERED_BREAD: {

            return {
                ...state,
                filteredBreads: state.breads.filter(bread => bread.categoria === action.categoryID)
            }
        }
        default:
            return state
    }
}

export default BreadReducer
