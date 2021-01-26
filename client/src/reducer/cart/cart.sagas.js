import {all, call, takeLatest, put, select} from 'redux-saga/effects';

import {getUserCartRef} from '../../firebase/firebase.utils';

import {selectCurrentUser} from '../user/userSelector';
import {selectCartItems} from './cartSelector';

import {clearCart, setCartFromFirebase} from './cartAction';

import CartActionType from './cartType';
import UserActionTypes from '../user/userType';


export function* clearCartOnSignOut() {
    yield put(clearCart());
};

export function* updateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
        try {
            const cartRef = yield getUserCartRef(currentUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({cartItems});
        } 
        catch(err) {
            console.log(err);
        };
    };
};

export function* checkCartFromFirebase({payload:user}){
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
};

export function* onSingOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCEESS,clearCartOnSignOut)
};

export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS,checkCartFromFirebase)
};

export function* onCartChange(){
    yield takeLatest([
        CartActionType.ADD_ITEM,
        CartActionType.REMOVE_ITEM,
        CartActionType.CLEAR_ITEM_FROM_CART
    ],
    updateCartInFirebase
    );
};

export function* cartSagas() {
    yield(all([
        call(onSingOutSuccess),
        call(onUserSignIn),
        call(onCartChange)
    ]));
};

