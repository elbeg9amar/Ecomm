import UserActionTypes from './userType'


const initialState = {
    currentUser:null,
    error:'',
    loading:false
};

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser:action.payload,
                error:null
            }
        case UserActionTypes.SIGN_OUT_SUCEESS:
            return {
                ...state,
                currentUser: null,
                error:null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error:action.payload
            }
        default: return state
    }
}

export default userReducer;