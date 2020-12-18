import React from 'react'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import { purple } from '@material-ui/core/colors'
import {Button} from '@material-ui/core' 

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffaa5e',
    },
    background: {
      main: '#ffaa5e',
    }
  },
})



function StyleTest() {


  return(
    <>
      <ThemeProvider theme={theme}>

        <Button color="secondary" variant="outlined">Primary</Button>
        <p></p>
      </ThemeProvider>
    </>
  )
}

export default StyleTest