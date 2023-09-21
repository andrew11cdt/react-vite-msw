import { useState } from 'react'
import mswLogo from './assets/msw.svg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginForm } from './components/LoginForm'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://mswjs.io/" target="_blank">
          <img src={mswLogo} className="logo msw" alt="msw logo" />
        </a>
      </div>
      <h1>Vite + React + msw</h1>
      <div className="card">
        <LoginForm />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
