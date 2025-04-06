import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">首页</Link> | <Link to="/about">关于</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <p>Cool UI React 模板 © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
