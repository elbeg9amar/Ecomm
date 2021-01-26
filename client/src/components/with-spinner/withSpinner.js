import React from 'react';
import Spinner from '../spinner/spinner'

const withSpinner = WrappedComponent => ({
    isLoading, ...otherpRops
}) => {
    return isLoading 
    ? 
        <Spinner />
    : 
        <WrappedComponent {...otherpRops}/>
};
export default withSpinner;