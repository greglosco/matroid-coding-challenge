import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import EventsContainer from './containers/EventsContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Matroid Events Timeline
        </h1>
      </header>
      <main>
        <div>
          <EventsContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
