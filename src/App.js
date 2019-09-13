import React from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/Home/home.component'
import ShopPage from './pages/Shop/shoppage.component';
const HatsPage = () =>{
  return <div className=""><h1>hats</h1></div>
}

const  App = () => {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"  
            component={HomePage}
            />  
          <Route exact path="/shop"  component={ShopPage} />
          <Route path="/shop/:slug"  component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
