
import './App.css';
import Home from './pages'

import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <main style={{background: '#c5c6c7'}}>
      <Home/>
      </main>
    </Router>
  );
}

export default App;
