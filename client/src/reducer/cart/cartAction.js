import CartActionType from './cartType';

export const toggleCartHidden = () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type:CartActionType.ADD_ITEM,
    payload:item
});

export const clearItem = item => ({
    type:CartActionType.CLEAR_ITEM_FROM_CART,
    payload:item
});

export const removeItem = item => ({
    type:CartActionType.REMOVE_ITEM,
    payload:item
});

export const clearCart = () => ({
    type: CartActionType.CLEAR_CART
});

export const updateCartInFirebase = () => ({
    type: CartActionType.UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = cartItems => ({
    type: CartActionType.SET_CART_FROM_FIREBASE,
    payload:cartItems
});

