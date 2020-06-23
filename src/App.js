import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import './App.css';

import Header from './pages/components/header.js'
import Login from './pages/containers/login.js'
import HomePage from './pages/containers/homePage.js'
import Head2Head from './pages/containers/head2head/head2head.js'
import Head2HeadTeams from './pages/containers/head2head/teams.js'

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  height: inherit;
  flex-direction: column;
`;

class App extends Component {
  render(){
    return (
    <AppWrapper>
      <Header/>
      <Router>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossOrigin='anonymous' />
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/home' component={HomePage}/>
          <Route exact path='/head2head' component={Head2Head}/>
          <Route exact path='/head2head/teams' component={Head2HeadTeams}/>
        </Switch>
      </Router>
    </AppWrapper>

    );
  }
}

export default App;
