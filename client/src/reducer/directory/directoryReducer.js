import DirectoryActionTypes from './directory.types';


const initialState = {
    sections:null,
    isFetching:false,
    errorMessage:undefined
};

const directoryReducer = (state=initialState, action) => {
    switch(action.type) {
        case DirectoryActionTypes.FETCH_DIRECTORY_START:
            return {
                ...state,
                isFetchin:true
            };
        case DirectoryActionTypes.FETCH_DIRECTORY_SUCCESS:
            return {
                ...state,
                isFetching:false,
                sections:action.payload
            };
        case DirectoryActionTypes.FETCH_DIRECTORY_FAIL:
            return {
                ...state,
                isFetchin:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}

export default directoryReducer;