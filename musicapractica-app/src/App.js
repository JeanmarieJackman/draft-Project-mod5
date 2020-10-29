import React from "react";
import './App.css';
import PracticeLog from './Containers/PracticeLog'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">music_note</span>
            <span>
              Musica<b>Practica</b>
            </span>
          </div>
        </header>
        <main>
          <PracticeLog />
        </main>
      </div>
    );
  }
}

export default App;
