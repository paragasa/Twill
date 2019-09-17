import React from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import Header from './components/header/header.component'
import HomePage from './pages/Home/home.component'
import ShopPage from './pages/Shop/shoppage.component';
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component'
import {Redirect} from 'react-router-dom';

class  App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser }= this.props;
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      //  console.log(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot =>{
          // REDUX CALL
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          
        });
      }
      setCurrentUser(userAuth)
      
    });
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render(){
    return (
    <div  className="App">
        <Header />
        <Switch>
          <Route exact path="/"  
            component={HomePage}
            />  
          <Route exact path="/shop"  component={ShopPage} />
          <Route path="/shop/:slug"  component={ShopPage} />
          <Route exact path="/signin"  render={ 
            () => this.props.currentUser ? (<Redirect to='/' />): (<SignInAndSignUpPage/>)
          } />
        </Switch>
    </div>
  );
  }
}
const mapStateToProps = ({user}) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
    

export default connect(mapStateToProps, mapDispatchToProps)(App);
