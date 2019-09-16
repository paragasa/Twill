import React from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import Header from './components/header/header.component'
import HomePage from './pages/Home/home.component'
import ShopPage from './pages/Shop/shoppage.component';
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component'


class  App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      //  console.log(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }
      this.setState({ currentUser: userAuth})
      
    });
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render(){
    return (
    <div  className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/"  
            component={HomePage}
            />  
          <Route exact path="/shop"  component={ShopPage} />
          <Route path="/shop/:slug"  component={ShopPage} />
          <Route path="/signup"  component={SignInAndSignUpPage} />
        </Switch>
    </div>
  );
  }
}

export default App;
