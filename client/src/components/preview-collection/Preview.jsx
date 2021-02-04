import React, {useState} from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../collection-item/CollectionItem';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './preview-styled';

function Preview({title, items, getCollectionToRelated}) {

    const [shopTitle, setShopTitle] =useState(null);

    return (
        <CollectionPreviewContainer onClickCapture={() => setShopTitle(title)}>
            <TitleContainer >{title.toUpperCase()}</TitleContainer>
            <PreviewContainer >
                {
                    items
                    .filter((item,idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} shopTitle={shopTitle}/>
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
};

export default Preview;
