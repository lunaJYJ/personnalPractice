import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Home from './components/home'
import Making from './components/Making'
import StyleTest from './components/StyleTest'

function App() {
  return (
    <>
      <Route path="/" component={Home} exact={true} />
      <Route path="/making" component={Making} />
      <Route path="/style" component={StyleTest} />
    </>
  );
}

export default App;


// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     <code>You can make your simple Browser start Page.</code>
//   </p>
//   <Link className="App-link" to="/making">Let's Making!</Link>
// </header>
// </div>