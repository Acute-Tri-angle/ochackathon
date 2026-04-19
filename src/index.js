import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Game from "./Game";
import NotFoundPage from './NotFoundPage';

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/game", element: <Game />},
  {path:"*", element: <NotFoundPage />},


]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
