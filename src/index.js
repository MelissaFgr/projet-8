import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/home/home';
import imgBack from './assets/images/developpeur-web.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  </React.StrictMode>
);