import Home from './pages/home';
import About from './pages/about';
import Book from './pages/book';
import Package from './pages/package';
import Gallery from './pages/gallery';
import logo from './logo.svg';
// import { setupMenu, setupSwiper, setupLoadMore } from './Assets/js/script.js';

// // Call the setup functions
// setupMenu();
// setupSwiper();
// setupLoadMore();

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/package' element={<Package/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
