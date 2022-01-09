import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SessionForm from './pages/sessionForm';
import Progress from './pages/progress';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fit</h1>

        <nav>
          <a href='/'>Home</a>
          <a href='/new_session'>Add a Session</a>
        </nav>
      </header>

      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Progress />} />
            <Route path='/new_session' element={<SessionForm />} />
          </Routes>
        </BrowserRouter>
        
      </main>
    </div>
  );
}

export default App;
