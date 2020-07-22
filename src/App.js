import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import './App.css';

import Header from './pages/components/header'
import Login from './pages/containers/login'
import HomePage from './pages/containers/homePage'

import Head2Head from './pages/containers/head2head/head2head'
import Head2HeadTeams from './pages/containers/head2head/teams'
import Head2HeadPlayers from './pages/containers/head2head/players'

import League from './pages/containers/leagues/league'
import LeagueTeams from './pages/containers/leagues/teams'
import LeaguePLayers from './pages/containers/leagues/players'

import NonMatch from './pages/containers/nonMatch/nonMatch'
import MatchAppointments from './pages/containers/nonMatch/matchAppointments'
import TeamImage from './pages/containers/nonMatch/teamImage'
import PlayerQuote from './pages/containers/nonMatch/playerQuote'
import PlayerBirthday from './pages/containers/nonMatch/playerBirthday';

import InMatch from './pages/containers/inMatch/inMatch'
import KickOff from './pages/containers/inMatch/kickOff'
import Substitution from './pages/containers/inMatch/substitution'
import SubstitutionNoPhotos from './pages/containers/inMatch/substitutionNoPhoto'
import Goal1 from './pages/containers/inMatch/goal1'
import Goal2 from './pages/containers/inMatch/goal2'
import HalfFullTime from './pages/containers/inMatch/halfFullTime'

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={HomePage}/>

          <Route exact path='/league' component={League}/>
          <Route exact path='/league/teams' component={LeagueTeams}/>
          <Route exact path='/league/players' component={LeaguePLayers}/>

          <Route exact path='/inMatch' component={InMatch}/>
          <Route exact path='/inMatch/kickoff' component={KickOff}/>
          <Route exact path='/inMatch/substitution' component={Substitution}/>
          <Route exact path='/inMatch/substitutionNoPhoto' component={SubstitutionNoPhotos}/>
          <Route exact path='/inMatch/goal1' component={Goal1}/>
          <Route exact path='/inMatch/goal2' component={Goal2}/>
          <Route exact path='/inMatch/half-full-time' component={HalfFullTime}/>

          <Route exact path='/head2head' component={Head2Head}/>
          <Route exact path='/head2head/teams' component={Head2HeadTeams}/>
          <Route exact path='/head2head/players' component={Head2HeadPlayers}/>

          <Route exact path='/nonMatch' component={NonMatch}/>
          <Route exact path='/nonMatch/MatchAppointments' component={MatchAppointments}/>
          <Route exact path='/nonMatch/teamImage' component={TeamImage}/>
          <Route exact path='/nonMatch/playerQuote' component={PlayerQuote}/>
          <Route exact path='/nonMatch/playerBirthday' component={PlayerBirthday}/>

        </Switch>
      </Router>
    </AppWrapper>

    );
  }
}

export default App;
