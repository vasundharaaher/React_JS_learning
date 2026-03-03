import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './componants/Login'
import Profile from './componants/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 
  return (
    <UserContextProvider>
     <h1>React context API</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
