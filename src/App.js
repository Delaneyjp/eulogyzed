import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header" style={titleStyle}>
        <p>
          Eulogyzd
        </p>
        <div style={descStyle}>
          <p >
            Take a moment to remember the ones we love...
        </p>
        </div>
      </header>
    </div >
  );
}

const titleStyle = {
  fontSize: 50,
}
const descStyle = {
  fontSize: 10,
  margin: -25
}


export default App;
