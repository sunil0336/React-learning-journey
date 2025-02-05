import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Routes, useNavigate } 
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Temp from './Components/Temp';

import logo from './logo.svg';
import './App.css';
import Parent from './Components/Parent';

function App() {
  return (
    <div className="App">   
    
      <Bar />
      <Router>
        {/* <Navbar /> */}
        {/* <Nav /> */}
        {/* <Temp /> */} 
        <Routes>
          <Route path="/greet" element={<Parent />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>

    </div>
  );
}



function Bar() {
  return (
    <>
      <button onClick={() => {
        window.location.href = "/greet";
      }}>Somthing</button>
      <button onClick={() => {
        window.location.href = "/";
      }}>Back</button>
    </>
  )
}




// function Nav(){
//   const navigate = useNavigate();
//   return(
//     <>
//     <button onClick={()=>{
//       navigate("/greet");
//     }}>Somthing</button>
//     <button onClick={()=>{
//       navigate("/");
//     }}>Back</button>
//     </>
//   )
// }

export default App;
