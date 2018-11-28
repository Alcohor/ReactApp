import React, { Component } from 'react';
import logo from './logo.svg';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Detail from './pages/detail'
import Home  from '@pages/home'
import  ClassifyContainer from '@pages/classify/ClassifyContainer'
import LoadingTips from '@common/loading'

class App extends Component {
  render() {
    return (
      <div className="App">
      <LoadingTips/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/classify" component={ClassifyContainer}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
