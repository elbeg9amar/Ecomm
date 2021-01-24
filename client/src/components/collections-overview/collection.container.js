import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux'

import {selectIsCollectionFetching} from '../../reducer/shopData/shopSelector';
import withSpinner from '../with-spinner/withSpinner';
import CollectionsOverview from './collectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;