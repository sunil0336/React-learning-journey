import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Xyz from './Components/Xyz';
import Usee from './Components/Usee';
import Counter from './Assignment/E2/Counter';
import Form from './Assignment/E2/Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    {/* <App /> */}
    <Counter counttt={20} />
    <Form />

   

    {/* <Usee /> */}
    {/* <Xyz />    */}
    
   </React.StrictMode>

);
