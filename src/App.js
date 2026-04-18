import logo from './carlogo.jpeg';
import './App.css';
import { useState } from 'react';

function Button({label, onClick, color = 'red'}) {
  const buttonstyle = {
    backgroundColor: color,
    color: 'white',
    padding: '1vh 60vh',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
  return (
    <button style = {buttonstyle} onClick = {onClick}>
      {label}
    </button>
    
  );
}

function handleClick(){

}


const App = () => {

return(
<div className = "App-bg">
  <div className = "App-logo"><img src = {logo} alt = "carlogo" width="100" height="100"></img></div>
  <div className = "App-centertext">
  <header className = "App-header">On the Lookout!</header>
  </div>
  <div className = "App-centertext">
    <div className = "App-whitetext">
      You are a police officer patroling on an eerie night. Your job is to be on the look out for any strange driving behaviors from other drivers. Can you keep the roads safe? Press the button below to start the night.</div>
    </div>
  <div><Button label="start da game" /></div>
</div>
);

  
}

export default App;
