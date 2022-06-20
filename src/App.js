import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Favorites from './Components/Favorites/Favorites';
import MediaComponent from './Components/MediaComponent/MediaComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Favorites' element={<Favorites />} />
          <Route path='/Media' element={<MediaComponent />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
