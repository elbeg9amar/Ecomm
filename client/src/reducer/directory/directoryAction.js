import DirectoryActionTypes from './directory.types';

export const fetchDirectoryStart = () => ({
    type: DirectoryActionTypes.FETCH_DIRECTORY_START
});

export const fetchDirectorySuccess = directoryMap => ({
    type: DirectoryActionTypes.FETCH_DIRECTORY_SUCCESS,
    payload: directoryMap
});

export const fetchDirectoryFailure = errMessage => ({
    type: DirectoryActionTypes.FETCH_DIRECTORY_FAIL,
    patload:errMessage
});
