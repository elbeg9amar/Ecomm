import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';


import {selectItem} from '../../reducer/shopData/shopSelector'
import {addItem} from '../../reducer/cart/cartAction';
import CustomButton from '../customButton/CustomButton';
import {
    Image

} from './item.styled'
function Item({item,addItem}) {
    const {name, price,imageUrl} = item
    return (
        <div>
        <Image  src={imageUrl} alt="item"/>
        <h1>{name}</h1>
        <h1>{price}</h1>
        <CustomButton onClick={() => addItem(item)}>
            Add to cart
        </CustomButton>
        </div>
    
    )
}
const mapStateToProps = createStructuredSelector({
    item: selectItem
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Item);

