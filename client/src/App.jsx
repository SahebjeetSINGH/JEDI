import { useState } from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import Cart from './pages/cart.jsx'

import Header from './components/Header'
import { hashContext, HashProvider } from './components/Card'

function App() {
 

  return (
    
    <BrowserRouter>
      <HashProvider> 
     
      <div>
        <Header />
      </div>
       <main className=' w-full min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mycart' element={<Cart />} />

          
        </Routes>

      </main>
       </HashProvider> 
   </BrowserRouter>
  )
}

export default App
