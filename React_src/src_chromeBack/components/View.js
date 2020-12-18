import React from 'react'
import {useRef} from 'react'
import {TextField} from '@material-ui/core'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import './View.scss'

function View ({code, css, js}) {

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

  const rendered = useRef(null);
  
  return(
    <div id="render" ref={rendered}>
    <ThemeProvider theme={theme}>
      <div className="box">
      <TextField
        id="outlined-multiline-static"
        className="HTML"
        color="primary"
        label="HTML"
        multiline
        fullWidth
        rows={10}
        variant="outlined"
        value={code}
      />
      </div>
      <div className="box">
      <TextField
        id="outlined-multiline-static"      
        className="CSS"
        color="primary"
        label="CSS"
        multiline
        fullWidth
        rows={10}
        variant="outlined"
        value={css}
      />
      </div>
      <div className="box">
      <TextField
        id="outlined-multiline-static"
        className="JS"
        color="primary"
        label="Java Script"
        multiline
        fullWidth
        rows={10}
        variant="outlined"
        value={js}
      />
      </div>
    </ThemeProvider>
    </div>
  )
}

export default React.memo(View)