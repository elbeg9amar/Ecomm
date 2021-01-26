
import {all, call} from 'redux-saga/effects';


import {userSagas} from './user/user.sagas';
import {cartSagas} from './cart/cart.sagas';
import {shopSagas} from './shopData/shop.saga';
import {directorySagas} from './directory/directory.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(cartSagas),
        call(shopSagas),
        call(directorySagas)
    ]);
};