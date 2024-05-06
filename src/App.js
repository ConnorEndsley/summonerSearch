import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Champions from "./components/Champions";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navContainer">
        <h2 className="title">Summoner Search</h2>
        <ul className="navList">
          <li className="navItem">Home</li>
          <li className="navItem">Champions</li>
          <li className="navItem">Match History</li>
          <li className="navItem">Contact Us</li>
          {/* <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li> */}
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions />} />
      </Routes>
    </>
  );
}

export default App;
