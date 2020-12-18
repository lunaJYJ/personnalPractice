
import React, {useState, useRef, useCallback} from 'react'
import Home from './Home'
import About from './About'
import Profiles from './Profiles'
import Historytest from './Historytest'
import {Route, Link} from 'react-router-dom'

const App = () => {
  return(
    <>
      <Link to="/"><p>Home</p></Link>
      <Link to="/about"><p>About</p></Link>
      <Link to="/profiles"><p>Profiles</p></Link>
      <Link to="/history"><p>History Test</p></Link>
      <hr />
      <div>
        <Route path={'/'} component={Home} exact={true}/>
        <Route path={'/about'} component={About} />
        <Route path={'/profiles'} component={Profiles} />
        <Route path={'/history'} component={Historytest} />
      </div>
    </>
  )
}

export default App


/*in funciton App : 
  function getRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16)
  }

  const [color, setColor] = useState('#000000')

  function handleClick() {
    setColor(getRandomColor());
  }
  */
    //In return()
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Iteration></Iteration>
    //     <p>hello!!</p>
    //   </header>
    // </div>
    // <>
    //   <button onClick={handleClick}>random Color</button>
    //     <LifeCycle color={color}/>
    // </>

/* Etc Imports Files
//import logo from './logo.svg';
//import './App.css';
//import Iteration from './iteration';
//import LifeCycle from './Lifecycle'
//import ErrorBoundary from './errorBoundary'
// import { useState } from 'react';
// import Info from './useeff'
// import Counter from  './Conter-reducer'
// import AVG from './avg'
// import SassCompo from './SassCompo'
// import CSSModule from './CSSModule' 
*/


//Chap 10 To-Do
// import TodoTemplate from './TodoCompo/TodoTemplate'
// import TodoInsert from './TodoCompo/TodoInsert'
// import TodoList from './TodoCompo/TodoList'

// function createBulkTodos() {
//   const array = [];
//   for (let i=1; i<=2500; i++)
//   array.push({id:i, text: `할 일 ${i}`, checked: false})

//   return array;
// }

// function App() {
//   const [todos, setTodos] = useState(createBulkTodos);
  
//   const nextId = useRef(2501);

//   const onInsert = useCallback(
//     text => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false,
//       };
//       setTodos(todos => todos.concat(todo));
//       nextId.current += 1;
//     },
//     [],
//   )

//   const onRemove = useCallback(
//     id => {
//       setTodos(todos => todos.filter(todo => todo.id !== id));
//     },
//     [],
//   )

//   const onToggle = useCallback(
//     id=> {
//       setTodos(todos =>
//         todos.map(todo => 
//           todo.id === id ? {...todo, checked: !todo.checked} : todo,
//         ), 
//       );
//     },
//     [],
//   );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert}/>
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
//       <Im />
//     </TodoTemplate>
//   );
// }

// export default App;

