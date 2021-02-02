import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {showItem, getUpdatedRelatedProducts} from '../../reducer/shopData/shop.action';


import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
} from './collectionItemStyled';

const CollectionItem = ({ item, showItem, getUpdatedRelatedProducts}) => {
  const history = useHistory();
  const { name,imageUrl,id } = item;
  const onSubmit = item => {
    showItem(item);
    history.push(`/item/${id}`);
    // getUpdatedRelatedProducts()
  }
  return (
    <CollectionItemContainer onClick={() => onSubmit(item)}>
      <BackgroundImage className='image' imageUrl={imageUrl}/>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  showItem: item => dispatch(showItem(item)),
  getUpdatedRelatedProducts: () => dispatch(getUpdatedRelatedProducts())
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);




