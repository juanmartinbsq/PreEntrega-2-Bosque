import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
      </div>
      <h1>Brand</h1>
    </>
  )
}

export default App
