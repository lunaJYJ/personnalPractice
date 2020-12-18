import logo from './logo.svg';
import './Home.css';
import React from 'react'

import {Button, TextField} from '@material-ui/core'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'

import {Link} from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary : {
      main: '#ffecd6f'
    },
    secondary : {
      main: '#d08159'
    }
  },
})

function Home() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="Login-form">
          <div className="Login-input" >
            <TextField className="id" placeholder="ID"/>
            <TextField className="pw" placeholder="PW" type="password"/>
          </div>
          <div className="LoginBtn">
            <Button className="Login" variant="outlined" color="primary">Sign-In</Button>
            <Button className="Signup" variant="outlined" color="secondary">Sign-Up</Button>
          </div>
        </div>

        <p>
        <code>You can make your simple Browser start Page.</code>
        </p>
        <Link className="link" to="/making" >For Unsigned-User Making!</Link>
      </header>
    </div>
    </ThemeProvider>
    </>
  );
}

export default Home;
