import React from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import './App.css';


import HomePage from './pages/Home/home.component'

const HatsPage = () =>{
  return <div className=""><h1>hats</h1></div>
}
const TopicsList = () =>{
  return <div>
    <h1>Topic List</h1>
    <Link to="/topics/sdfkj">clicker</Link>
  </div>
}
const TopicDetail = (props) =>{
return <div className=""><h1>Topic TopicDetail {props.match.params.slug}</h1></div>
}
const  App = () => {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/"  
            component={HomePage}

            />  
          <Route exact path="/shop"  component={TopicsList} />
          <Route path="/shop/:slug"  component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
