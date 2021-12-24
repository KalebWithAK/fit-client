import './styles/App.css';
import React from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Session from './pages/session';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fit</h1>
      </header>

      <main>
        {/*<Switch>
          <Route exact path='/'>
            View Progress
          </Route>
          <Route path='session'>
            <Session />
          </Route>
        </Switch>*/}
        <Session />
      </main>
    </div>
  );
}

export default App;
