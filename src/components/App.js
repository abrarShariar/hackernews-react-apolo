import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Login from './Login';

// for routing
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="center w85">
       <Header />
       <div className="ph3 pv1 background-gray">
         <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
         </Switch>
       </div>
      </div>
    )
  }
}

export default App;
