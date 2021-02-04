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

export const getUpdatedRelatedProducts = (id) => ({
    type:ShopActionTypes.UPDATE_RELATED_PRODUCTS,
    payload:id
});

export const getColletionStart = (title) => ({
    type:ShopActionTypes.GET_COLLECTION_FROM_FIREBASE_START,
    payload:title
});

export const getCollectionSuccess = (data) => ({
    type: ShopActionTypes.GET_COLLECTION_FROM_FIREBASE_SUCCESS,
    payload:data
});

export const getCollectionFailure = err => ({
    type:ShopActionTypes.GET_COLLECTION_FROM_FIREBASE_FAILURE,
    payload:err
})