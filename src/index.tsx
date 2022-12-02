import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Biography from './pages/Biography';
import Photos from './pages/Photos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/bio',
    element: <Biography />,
  },
  {
    path: '/photos',
    element: <Photos />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
