import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Gallery from './components/cards/gallery/Gallery.js';
import Home from './components/Home.js';

import './App.css';
import Detail from './components/cards/details/Detajl.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/details/:breed" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
