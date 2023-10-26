import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/App.scss'
// import Home from './components/screens/home/Home'
import { RouterProvider } from 'react-router-dom'
import Router from './components/ui/Router'

// ?? чому треба писати з маленької H якщо назва з великої
// в чому різниця імпорту з дужками і без ?

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={Router} />)
