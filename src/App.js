
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import React, { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// hii




function App() { 
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>{
    setalert({
    msg: message,
    type: type
    })
    setTimeout(() => {
      setalert(null);
       }, 1500);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='rgb(3 10 40)';
      showalert("Dark Mode has been enabled","Success");
      document.title='Texters-DarkMode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been enabled","Success");
      document.title='Texters-LightMode';
    }
  }

  return (
    <>
    <Router>
 <Navbar title="Texters" about=" About US" mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container my-3"> 
   <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <Textarea showalert={showalert} heading="New heading"  mode={mode}/>
            
          </Route>
          <Route path="/">
            <About/>
          </Route>
        </Switch>
        
     </div> 
     </Router>
     
    


    </>
  );
}

export default App;
