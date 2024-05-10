import './App.css'
import Home from './components/Home';
import Nav from './components/Nav';
import Champions from './components/Champions'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (

<div className='App'>
<BrowserRouter>
<nav className="navContainer">
        <h2 className="title"><Link to="/">Summoner Search</Link></h2>
        <ul className="navList">
          <li className="navItem"><Link to="/">Home</Link></li>
          <li className="navItem"> <Link to="/champions">Champions</Link></li>
          <li className="navItem" > <Link to="/matchHistory">Match History</Link></li>
          <li className="navItem">Contact Us</li>
        </ul>
</nav>


      <Routes>
      <Route exact path="/" element={<Home></Home>}/>
      <Route path='/champions' element={<Champions></Champions>}/>
      </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
