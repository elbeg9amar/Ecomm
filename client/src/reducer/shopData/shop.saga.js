
import {takeLatest, call, put, all} from 'redux-saga/effects';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionFailure,
    getCollectionSuccess,
    getCollectionFailure
} from './shop.action';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(err) {
        yield put(fetchCollectionFailure(err.message));
    };
};

export function* getCollectionAsync({payload:title}) {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        
        yield put(getCollectionSuccess(collectionsMap[title].items));

    } catch(err) {
        yield put(getCollectionFailure(err));
    };
};

export function* getCollectionStart() {
    yield takeLatest(ShopActionTypes.GET_COLLECTION_FROM_FIREBASE_START,getCollectionAsync)
};

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};

export function* shopSagas() {
yield all([
    call(fetchCollectionsStart),
    call(getCollectionStart)
]);
};