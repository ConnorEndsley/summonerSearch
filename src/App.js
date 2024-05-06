import './App.css'
import Home from './components/Home';
import Nav from './components/Nav';
import Champions from './components/Champions';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/champions' element={<Champions/>}/>
</Routes>
  );
}

export default App;
