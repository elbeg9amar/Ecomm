import React from 'react';
import { useHistory } from 'react-router-dom'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/cartItem';

import {selectCartItems} from '../../reducer/cart/cartSelector';
import {toggleCartHidden} from '../../reducer/cart/cartAction'
import './CartDrop.scss';



function CartDrop({cartItems, toggleCartHidden}) {
    const history = useHistory()
    return (
        <div className="cart-dropdown">
            <div className='cart-items'>
                {
                    cartItems.length 
                    ? cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem}/>
                    )
                    : (
                        <span className="empty-message">Your cart is empty</span>
                    )
                }
            </div>
            <CustomButton onClick={()=>{
                history.push('/checkout');
                toggleCartHidden()
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps =createStructuredSelector ({
    cartItems: selectCartItems
})

export default connect(mapStateToProps, {toggleCartHidden})(CartDrop)
