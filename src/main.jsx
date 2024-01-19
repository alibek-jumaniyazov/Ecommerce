import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/style.css'
import './assets/styles/header.css'
import './assets/styles/footer.css'
import './assets/styles/home.css'
import './assets/styles/categoryProducts.css'
import { UserProvider } from './Context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
)
