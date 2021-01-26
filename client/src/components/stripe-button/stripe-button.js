import React from 'react';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

import {clearCart} from '../../reducer/cart/cartAction'

const StripeCheckoutbutton = ({price, clearCart}) => {
    const priceForStripe = price *100;
    const history = useHistory()
    const publishableKey = 'pk_test_51HxvTmK2qDEiyLXyJHRIRZrEPHbMVXBLi7bRCTH8ZFxJKMn7cxYHzSlJUAyfDb0atHcYAIGFa9IpjP10HFPh9SOc00d2YiG188';

    const onToken = token => {
        axios({
            url:'http://localhost:999/payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        })
        .then(res => {
            alert("Payment successful");
            clearCart();
            history.push('/shop')
        })
        .catch(err => {
            console.log('Payment error: ', err)
            alert('There was issue with your payment')
        })
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="KhaanTech Payment"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
});

export default connect(null,mapDispatchToProps)(StripeCheckoutbutton);