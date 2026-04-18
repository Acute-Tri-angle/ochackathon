import logo from './carlogo.jpeg';
import './App.css';
import { useState } from 'react';

function Button({label, onClick, color = 'red'}) {
  const buttonstyle = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 20px',
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

const App = () => {

return(
<div>
  <div className = "App-logo"><img src = {logo} alt = "carlogo" width="100" height="100"></img></div>
  <div className = "App">
  <header className = "App-header">car gaem</header>
  </div>
  <div><Button label="click me" /></div>
</div>
);

  
}

export default App;
