import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CheckoutPage from './pages/checkout/checkout.component';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in/sign-in.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser} from './redux/user/user.selectors';
import styled from 'styled-components';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

const text = styled.div`
  color: 'red',
   position: 'left'`

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else {
      setCurrentUser(userAuth);
      }
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/login' render= {() => 
            this.props.currentUser ? (<Redirect to='/' />) 
            : (<SignInPage />)
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps= createStructuredSelector ({
    currentUser: selectCurrentUser,
    collectionsArray: selectCollectionsForPreview
  });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
