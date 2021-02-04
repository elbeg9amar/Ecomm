import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {selectCollection} from '../../reducer/shopData/shopSelector';
import CollectionItem from '../../components/collection-item/CollectionItem';

import {getColletionStart} from '../../reducer/shopData/shop.action';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './Collection-styled';

const Collection = ({collection, getColletionStart}) => {  
    const {collectionId} = useParams();
    const {title, items} = collection;

    useEffect(() => {
        getColletionStart(collectionId)
    },);

    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer >
                {
                    items.map(item=> (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) 
});

const mapDispatchToProps = dispatch => ({
    getColletionStart: title => dispatch(getColletionStart(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);


