import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import SplashCursor from './components/SplashCursor/SplashCursor';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SplashCursor />
    </BrowserRouter>
  );
}

export default App;
