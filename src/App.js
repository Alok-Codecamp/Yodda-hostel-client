import logo from './logo.svg';
import './App.css';
import Admin from './component/Admin/Admin';
import { Route, Routes } from 'react-router-dom';
import Home from './component/HomePage/Home';
import NavBar from './component/HomePage/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='student' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
