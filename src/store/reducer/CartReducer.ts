import {ADD_ITEM, CONFIRM_CART, REMOVE_ITEM} from "../actions/CartActions";

const INITIAL_STATE = {
    items: [],
    total: 0,
    confirm: false
}

function sumTotal(list: any[]) {
    return list.map(item => item.quanty * item.price).reduce((a, b) => a + b, 0)
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let updatedCart = []
            if (state.items.find(item => item.id === action.item.id)) {
                updatedCart = state.items.map(item => {
                    if (item.id === action.item.id) item.quanty++
                    return item
                })
            } else {
                const item = {...action.item, quanty: 1}
                updatedCart = [...state.items, item]
            }
            return {
                ...state,
                items: updatedCart,
                total: sumTotal(updatedCart)
            }
        case REMOVE_ITEM:
            const filteredCart = state.items.filter(item => item.id !== action.itemID)
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart)
            }
        case CONFIRM_CART:
            return {
                ...state,
                items: [],
                total: 0
            }
        default:
            return state
    }
}

export default CartReducer
