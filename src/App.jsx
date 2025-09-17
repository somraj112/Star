import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import './App.css';
import TestComponent from './components/test/test';
import SplashCursor from './components/SplashCursor/SplashCursor';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<TestComponent />} />
      </Routes>
    <SplashCursor />
    </BrowserRouter>
  );
}

export default App;
