import React from 'react'
import ReactDOM from 'react-dom/client'
import Route from './routes/Route.jsx'
import './App.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={Route} />
  </React.StrictMode>,
)
