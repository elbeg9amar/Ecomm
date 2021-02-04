import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import withSpinner from '../with-spinner/withSpinner';
import Directory from './Directory';

import {selectIsDirectoryLoaded} from '../../reducer/directory/directorySelector';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsDirectoryLoaded(state)
});

const DirectoryPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(Directory);

export default DirectoryPageContainer;