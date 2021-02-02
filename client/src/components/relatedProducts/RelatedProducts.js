import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

// import RelatedProductsItem from './relatedProductItems/RelatedProductsItem'
import CollectionItem from '../collection-item/CollectionItem';
import {selectRelatedProducts} from '../../reducer/shopData/shopSelector';

import {
    RelatedProductsContainer
} from './RelatedProducts.styled';

function RelatedProducts({ products }) {
    return (
        <div>
        <h1>You May Also Like</h1>
        <RelatedProductsContainer>
        {
            products.map((product) => (
                <CollectionItem key={product.id} item={product} />
            ))
        }
        </RelatedProductsContainer>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    products: selectRelatedProducts
});

export default connect(
    mapStateToProps
)(RelatedProducts);