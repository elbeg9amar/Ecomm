import React from 'react'

import CollectionItem from '../collection-item/CollectionItem'

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './preview-styled'

function Preview({title, items}) {
    return (
        <CollectionPreviewContainer >
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
    ) 
}

export default Preview;
