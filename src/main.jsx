import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Paginaprincipal from "./paginaprincipal.jsx"
import PaginaOds from "./paginaOds.jsx"
import Mim from "./mim.jsx"
const roteador = createBrowserRouter([
  {path: '/', element: <Paginaprincipal /> },
  {path: '/ods', element: <PaginaOds />},
  {path: '/mim',element:<Mim/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={roteador} />
  </React.StrictMode>,
)

