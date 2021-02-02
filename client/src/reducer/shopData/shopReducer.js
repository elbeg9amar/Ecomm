
import ShopActionTypes from './shop.types';

import {
    productsFromShopAndCollection, 
    relatedProductsArray,
    showItem
} from './shop.Utils'



const initialState = {
    collections: null ,
    item:null,
    isFetching: false,
    errorMessage:undefined,
    relatedProducts: null,
    showRelatedProducts:null
};

const shopReducer = (state=initialState, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching:true
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching:false, 
                collections: action.payload
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAIL:
            return {
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        case ShopActionTypes.SHOW_ITEM:
            return {
                ...state,
                item: showItem(state.relatedProducts,action.payload),
                showRelatedProducts: relatedProductsArray(state.relatedProducts,action.payload.id)
            }
        case ShopActionTypes.GET_COLLECTION_TO_RELATED:
            return {
                ...state,
                relatedProducts: productsFromShopAndCollection(state.collections,action.payload),
            }
        case ShopActionTypes.UPDATE_RELATED_PRODUCTS:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}

export default shopReducer;


