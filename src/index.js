import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import AboutMe from './AboutMe';
import CV from './CV';
import Projects from './Projects';
import Contact from './Contact';
import reportWebVitals from './tests/reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <App />
        },
        {
            path:"/aboutme",
            element: <AboutMe />
        },
        {
            path:"/projects",
            element: <Projects />
        },
        {
            path:"/cv-experience",
            element: <CV />
        },
        {
            path:"/contact",
            element: <Contact />
        },
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
