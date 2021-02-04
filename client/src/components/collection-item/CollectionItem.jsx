import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  showItem, 
  getUpdatedRelatedProducts, 
  getColletionStart
} from '../../reducer/shopData/shop.action';


import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
} from './collectionItemStyled';

const CollectionItem = ({ 
  item, 
  shopTitle, 
  showItem, 
  getUpdatedRelatedProducts , 
  getColletionStart
}) => {

  const history = useHistory();

  const { name,imageUrl,id } = item;

  const onSubmit = item => {
    if(shopTitle) {
      getColletionStart(String(shopTitle.toLowerCase()));

      setTimeout(function(){
        getUpdatedRelatedProducts(id);
        showItem(item);
      },300);
    } else {
      getUpdatedRelatedProducts(id);
      showItem(item);
    }
    history.push(`/products/${id}`); 
  };

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
  getUpdatedRelatedProducts: id => dispatch(getUpdatedRelatedProducts(id)),
  getColletionStart: title => dispatch(getColletionStart(title))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);




