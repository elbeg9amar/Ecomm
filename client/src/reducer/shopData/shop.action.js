import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAIL,
    payload: errorMessage
});

export const showItem = item => ({
    type:ShopActionTypes.SHOW_ITEM,
    payload:item
});