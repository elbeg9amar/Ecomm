import React, {lazy, useEffect, Suspense} from 'react';
import { Switch ,Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {checkUserSession} from './reducer/user/userActions';
import {fetchDirectoryStart} from './reducer/directory/directoryAction';
import {selectCurrentUser} from './reducer/user/userSelector';

import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error.boundary';

// import Homepage from './pagess/homapage/Homepage';
// import ShopPage from './pagess/shopPage/ShopPage';
// import Header from './components/header/Header';
// import SigninPage from './pagess/signinPage/SigninPage';
// import Checkout from './pagess/checkout/Checkout';

import {GlobalStyle} from './global.styles';

const Homepage = lazy(() => import('./pagess/homapage/Homepage'));
const ShopPage = lazy(() => import ('./pagess/shopPage/ShopPage'));
const Header = lazy(() => import ('./components/header/Header'));
const SigninPage = lazy(() => import('./pagess/signinPage/SigninPage'));
const Checkout = lazy(() => import ('./pagess/checkout/Checkout'));
const Item = lazy(() => import('./components/item/item.component'))

const App = ({currentUser, checkUserSession, directoryArray, fetchDirectoryStart }) =>  {

  useEffect(() => {
    checkUserSession()
  },[checkUserSession]);

  useEffect(()=> {
    fetchDirectoryStart()
},[fetchDirectoryStart]);

  return (
      <div>
        <GlobalStyle />
        <Header/>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
              <Route exact path="/"> <Homepage/> </Route>
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/signin" render={() => currentUser 
                ? (<Redirect to='/' />) 
                : (<SigninPage/>) }
                />
                <Route exact path='/checkout'><Checkout/></Route>
                <Route path='/item/:id'><Item/></Route>
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
};
<SigninPage/>
const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchDirectoryStart: () => dispatch(fetchDirectoryStart())
}) ;

export default connect(mapStateToProps,mapDispatchToProps)(App);
