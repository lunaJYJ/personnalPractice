import React from 'react'
import './Making.scss'
import View from './View'
import {useState} from 'react' 
import {Button, TextField} from '@material-ui/core'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'

function Making () {
  const [code, setCode] = useState([]) //code is html
  const [js,setJs] = useState('') //js
  const [css, setCss] = useState('') //css
  const [bg, setBg] = useState('') //background image url

  const [time, setTime] = useState(false)
  const [todo, setTodo] = useState(false)

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

  const onChange =(e) => {
    setBg(e.target.value)
  }

  const timeClick =(e) => {
    time === true ? e.target.style.color="white" : e.target.style.color="#d08159"
    time === true ? setTime(false) : setTime(true);
    // time === true ? setCode('') : setCode(() => code.splice(2,0,`<div id="clock"> <h1 id="clockString">00:00</h1> </div>`))
    // time === true ? setCss('') : setCss(() => css.splice(0,0,`#clockString {font-size: 5vmax; color : white;}`))
    // time === true ? setJs('') : setJs(() => js.splice(0,0,``))
  }

  const todoClick =(e) => {
    todo === true ? e.target.style.color="white" : e.target.style.color="#d08159"
    todo === true ? setTodo(false) : setTodo(true);
    // todo === true ? setCode('') : setCode(()=>code.concat('<p style="font-weight: bold;">timeTicking on</p>')) 
  }
  //html render meethod 생각하기
  
  const bgClick =() => {
    setCss(`background-image : url("${bg}");`)
  }


  return (
    <ThemeProvider theme={theme}>
    <div className="Making">
      <div className="Making-menu">
        <p>Background URL : </p>
          <TextField className="backUrl" value={bg} onChange={onChange} style={{marginBottom: '10px'}} placeholder="~.jpg | png | etc.."/>
          <Button onClick={bgClick} variant="outlined">set</Button>
        <p>Contents</p>
        <ul>
          <li onClick={timeClick}>Time-Ticking</li>
          <li onClick={todoClick}>TodoList</li>
        </ul>
        <p>Customize (미구현)</p>
      </div>

      <div className="Making-view">
        <View code={code} css={css} js={js}></View>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default Making