import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Biography from './pages/Biography';
import Photos from './pages/Photos';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='bio' element={<Biography />} />
          <Route path='photos' element={<Photos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
