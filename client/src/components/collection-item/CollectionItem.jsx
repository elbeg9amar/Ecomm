import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {showItem} from '../../reducer/shopData/shop.action';


import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collectionItemStyled';

const CollectionItem = ({ item, showItem }) => {
  const history = useHistory();
  const { name, price, imageUrl,id } = item;
  const onSubmit = item => {
    showItem(item);
    history.push(`/item/${id}`)
  }
  return (
    <CollectionItemContainer onClick={() => onSubmit(item)}>
      <BackgroundImage className='image' imageUrl={imageUrl}/>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>10</PriceContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  showItem: item => dispatch(showItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);




