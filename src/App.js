import React, { Component } from 'react';
import logo from './logo.svg';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Detail from './pages/detail'
import MainContainer  from '@pages/container'

import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainContainer}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
