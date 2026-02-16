import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home  name="Nawaraj"/>
      {/* <Day2/> */}
    </>
  )
}

export default App
