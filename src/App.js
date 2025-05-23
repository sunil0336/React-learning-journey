import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Routes, useNavigate } 
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import Contact from './pages/Contact';
import Temp from './Components/Temp';
import './App.css';
import Parent from './Components/Parent';
// jwt pages 
import LoginPage from './JwtToken/LoginPage';
import DashboardPage from './JwtToken/DashboardPage';
import Pbar from './Assignment/Pbar';

// import logo from './logo.svg';

function App() {
  return (
    <div className="App">  
      <Pbar /> 
    
      {/* <Bar /> */}
      <Router>
        <Navbar />
        {/* <Nav /> */}
        {/* <Temp /> */} 
        <Routes>
          <Route path="/greet" element={<Parent />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* for jwt token */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

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
