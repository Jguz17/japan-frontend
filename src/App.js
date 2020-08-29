import React from 'react';
import { Grid } from '@material-ui/core'
import Nav from './components/Nav'
import Body from './components/Body'
import SocialMedia from './components/SocialMedia'

import './assets/styles/main.css'


function App() {
  return (
    <Grid id='main' container direction='column'>
      <Grid item container>
        <Nav/>
      </Grid>
      <Grid item container>
        <Grid container item xs={12}>
          <Grid item xs={1} md={3} lg={1}/>
          <Grid item xs={10} md={6} lg={4}>
            <Body/>
          </Grid>
          <Grid item xs={1} md={3} lg={1}/>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={6}>
          <SocialMedia/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
