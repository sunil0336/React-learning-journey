import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Xyz from './Components/Xyz';
import Usee from './Components/Usee';
import Counter from './Assignment/E2/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    {/* <App /> */}
    <Counter />
   

    {/* <Usee /> */}
    {/* <Xyz />    */}
    
   </React.StrictMode>

);
