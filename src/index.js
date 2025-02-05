import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import First from './Components/First';
import Parent from './Components/Parent';
import Xyz from './Components/Xyz';
import Usee from './Components/Usee';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <App />
    <Usee />
    {/* <First/> */}
    {/* <Parent/>  */}
    {/* <Xyz />    */}
    
   </React.StrictMode>

);
