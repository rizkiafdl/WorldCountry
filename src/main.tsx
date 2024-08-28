import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@/index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import Country from './Pages/Country'
import CountryDetail from './components/custom/CountryComponents/CountryDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/country",
    element: <Country />,
  },
  {
    path: "/country/:countryName",
    element: <CountryDetail />
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
