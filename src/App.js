import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
function App() {
  const[showAlert,setShowAlert]=useState(1);
  setTimeout(() => {
    setShowAlert(0)
  }, 10000);
  return (
    <>
    <Router>
      <NoteState>
          <Navbar />
           {showAlert? <Alert message="add your own mongoURI to make it work on your device in backend/db.js" />:'' }
          <div className="container">
            <Routes>
           
              <Route exact path="/" element={<Home/>}>
              
              </Route>
              <Route exact path="/about" element={<About/>}>
              
              </Route>
              <Route exact path="/login" element={<Login/>}>
              
              </Route>
              <Route exact path="/signup" element={<Signup/>}>
               
              </Route>
        
            
            </Routes>
          </div>
    
      </NoteState>
</Router>

    </>
  );
}

export default App;
