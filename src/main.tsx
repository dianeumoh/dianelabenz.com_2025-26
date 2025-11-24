import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Layout from './Layout.tsx'
import Home from './pages/Home.tsx'
import SelectedWorks from './pages/SelectedWorks.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import ComplianceManager from './pages/ComplianceManager.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'selected-works', element: <SelectedWorks /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'compliance-manager', element: <ComplianceManager /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
