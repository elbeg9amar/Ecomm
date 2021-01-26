
import {takeLatest, call, put, all} from 'redux-saga/effects';

import {firestore, convertDirectorySnapshotToMap} from '../../firebase/firebase.utils';

import {
    fetchDirectorySuccess,
    fetchDirectoryFailure
} from './directoryAction';

import DirectoryActionTypes from './directory.types';

export function* fetchDirectoryAsync() {
    try {
        const directoryRef = firestore.collection('directory');
        const snapshot = yield directoryRef.get();
        const directoryMap = yield call(convertDirectorySnapshotToMap, snapshot);
        yield put(fetchDirectorySuccess(directoryMap));
    } catch(err) {
        yield put(fetchDirectoryFailure(err.message));
    };
}
;
export function* fetchDirectoryStart() {
    yield takeLatest(DirectoryActionTypes.FETCH_DIRECTORY_START,fetchDirectoryAsync);
};

export function* directorySagas() {
    yield all([
        call(fetchDirectoryStart)
    ]);
};