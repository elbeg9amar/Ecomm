import React,{useEffect, lazy, Suspense} from 'react'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';


// import CollectionPageContainer from '../Collection/Collection.container';
// import CollectionOverviewContainer from '../../components/collections-overview/collection.container';

import Spinner from '../../components/spinner/spinner'
import {fetchCollectionsStart} from '../../reducer/shopData/shop.action';

const CollectionPageContainer = lazy(() => import ('../Collection/Collection.container'));
const CollectionOverviewContainer = lazy(() => import ('../../components/collections-overview/collection.container'))

const ShopPage = ({fetchCollectionsStart,match}) => {
    
    useEffect(()=> {
        fetchCollectionsStart()
    },[fetchCollectionsStart])

    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner/>}>
            <Route 
                exact path={`${match.path}`} 
                component={CollectionOverviewContainer}
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
            />
            </Suspense>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
