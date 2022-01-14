import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Notfound from './component/pages/Notfound';
import AddUsers from './component/users/AddUsers';
import EditUsers from './component/users/EditUsers';
import User from './component/users/User';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/about" element={<About/>}/>
        <Route exact path ="/contact" element={<Contact/>}/>
        <Route exact path="/users/add" element={<AddUsers/>}/>
        <Route exact path="/users/edit/:id" element={<EditUsers/>}/> 
        <Route exact path="/users/:id" element={<User/>}/>
        <Route path = "*" element={<Notfound/>}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
