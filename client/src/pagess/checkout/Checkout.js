import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutbutton from '../../components/stripe-button/stripe-button'

import {selectCartItems, selectCartTotal} from '../../reducer/cart/cartSelector'
import './Checkout.scss'; 

const Checkout = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="haeder-block">
                <span>Product</span>
            </div>

            <div className="haeder-block">
                <span>Description</span>
            </div>

            <div className="haeder-block">
                <span>Quantity</span>
            </div>

            <div className="haeder-block">
                <span>Price</span>
            </div>

            <div className="haeder-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className="total">
            <span> TOTAL:${total} </span>
        </div>
        <div className="test-warning">
            *Please use the following the credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        <StripeCheckoutbutton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(Checkout);