import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../collection-item/CollectionItem';

import {getCollectionToRelated} from '../../reducer/shopData/shop.action';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './preview-styled'

function Preview({title, items, getCollectionToRelated}) {
    const onClicked = title => {
        getCollectionToRelated(String(title.toLowerCase()))
    }
    return (
        <CollectionPreviewContainer onClick={() => onClicked(title)}>
            <TitleContainer >{title.toUpperCase()}</TitleContainer>
            <PreviewContainer >
                {
                    items
                    .filter((item,idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    getCollectionToRelated: title => dispatch(getCollectionToRelated(title))
});

export default connect(null, mapDispatchToProps)(Preview);
