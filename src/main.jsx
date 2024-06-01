import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import App from './App.jsx';
import Contact from './components/Contact/index.jsx';
import HeroSection from './components/HeroSection/index.jsx';
import Projects from './components/Projects/index.jsx';
import Skills from './components/Skills/index.jsx';
import Experience from './components/Experience/index.jsx';
import Education from './components/Education/index.jsx';


const router =  createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <HeroSection />},
      {path: "/skills", element: <Skills />},
      {path: "/projects", element: <Projects />},
      {path: "/experience", element: <Experience />},
      {path: "/education", element: <Education />},
      {path: "/contact", element: <Contact />},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
