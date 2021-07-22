import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in/sign-in.component';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
     if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      //checks to see if snapshot has changed
      userRef.onSnapshot(snapshot => {
        this.setState({
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        });
      });
     }
     this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

    render() {
        return (
            <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={SignInPage} />
      </Switch>
      </div>
        );
    }
}

export default App;