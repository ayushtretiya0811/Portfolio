// import logo from './logo.svg';
import './App.css';
import './Components/Navbar/Nav'
import About from './Components/About/About';
import Nav from './Components/Navbar/Nav';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Main from './Main.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
   <>
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={ <Main/>} />
          <Route path="/about" element={ <About/>} />
          <Route path="/contact" element={ <Contact/>} />
        
        </Routes>
      </Router>
 
   </>
  );
}

export default App;
