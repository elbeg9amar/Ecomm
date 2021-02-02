import React from 'react';
import {connect} from 'react-redux';

import {selectCollection} from '../../reducer/shopData/shopSelector';
import CollectionItem from '../../components/collection-item/CollectionItem';

import {getCollectionToRelated} from '../../reducer/shopData/shop.action';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './Collection-styled'

const Collection = ({collection, getCollectionToRelated}) => {  
    
    const {title, items} = collection;

    const onClicked = title => {
        getCollectionToRelated(String(title.toLowerCase()))
    }

    return (
        <CollectionPageContainer onClick={()=> onClicked(title)}>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer >
                {
                    items.map(item=> (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) 
});

const mapDispatchToProps = dispatch => ({
    getCollectionToRelated: title => dispatch(getCollectionToRelated(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);


