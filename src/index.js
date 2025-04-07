import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Xyz from './Components/Xyz';
import Usee from './Components/Usee';
import Counter from './Assignment/E2/Counter';
import Form from './Assignment/E2/Form';
import DataFetcher from './Assignment/DataFetcher';
import Test from './Components/Test';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <App />
      <Test name="Sunil" age={22} isActive={true} /> 
    <br/>
    <Counter counttt={20} />
    <hr/>
    <Form />
    <hr />
    <DataFetcher />

   

    {/* <Usee /> */}
    <Xyz />   
    
   </React.StrictMode>

);
