import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dark text-foreground bg-background w-full h-screen'>
      <Header />
      <Hero />
    </div>
  )
}

export default App
