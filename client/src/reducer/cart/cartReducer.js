import CartActionType from './cartType'
import {additemToCart , removeItemFromCart} from './cartUteils'

const initialState = {
    hidden:true,
    cartItems:[],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: additemToCart(state.cartItems,action.payload)
            };
        case CartActionType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case CartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionType.CLEAR_CART:
            return  {
                ...state,
                cartItems:[]
            }
        case CartActionType.SET_CART_FROM_FIREBASE:
            return {
                ...state,
                cartItems: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;