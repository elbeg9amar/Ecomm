import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';

import Spinner from './components/spinner/spinner'

import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './reducer/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<Spinner/>}>
          <App />
        </Suspense>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
);


