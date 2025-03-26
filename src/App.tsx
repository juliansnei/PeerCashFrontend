import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen overflow-hidden bg-pink-900'>
      <div className="bg-sky-950 text-white">Hello human</div>
      <div className="bg-sky-900 text-white">Hello human</div>
      <div className="bg-sky-800 text-white">Hello human</div>
      <div className="bg-sky-700 text-white">Hello human</div>
    </div>
  )
}

export default App
