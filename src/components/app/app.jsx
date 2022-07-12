import React from 'react';
import AppHeader from '../app-header/app-header';
import './_app.scss';
import { Route, Switch } from 'react-router';
import CartPage from '../../pages/cart/cart-page';
import HomePage from '../../pages/home/home-page';


// import BaseModalWrapper  from '../../components/modal/BaseModalWrapper';

  return (
    <div className="app__wrapper container">
      <div className="app__container">
        <AppHeader />
        <div className="app__content container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={CartPage} />
            </Switch>
        </div>
      </div>
    </div>
  );  


export default App;
