import React from 'react';

import ItemDetail from '../../components/item-details/ItemDetail';
import ItemReview from '../../components/item-review/ItemReview';
import RelatedProducts from '../../components/relatedProducts/RelatedProducts'
function ItemPage() {
    return (
        <div>
            <ItemDetail />
            <RelatedProducts />
            <ItemReview />
        </div>
    )
}

export default ItemPage
