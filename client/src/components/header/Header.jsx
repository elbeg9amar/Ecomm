import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import {selectCartHidden} from '../../reducer/cart/cartSelector';
import {selectCurrentUser} from '../../reducer/user/userSelector';

import { ReactComponent as Logo } from '../../assets/shopping-bag.svg';

import CartIcon from '../cart-icon/cartIcon';
import CartDrop from '../cartDrop/CartDrop';

import {HeaderContainer, LogoContianer, OptionsContainer, OptionLink} from './headerStyled'

import {signOutStart} from '../../reducer/user/userActions'


function Header({currentUser,hidden, signOutStart}) {
    
    return (
        <HeaderContainer>
            <LogoContianer to="/">
                <Logo alt="logo" className="logo"/>
            </LogoContianer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {
                    currentUser 
                    ? <OptionLink as='div' onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                    : <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDrop />}
        </HeaderContainer>
    )
}

const mapToStateProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect (mapToStateProps,mapDispatchToProps)(Header)
