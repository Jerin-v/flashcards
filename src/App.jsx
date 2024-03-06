import { useState } from 'react'
import './App.css'
import Card from './Card'


function App() {


  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Psychology Facts</h1>
      <h3>Want to test your psychology knowledge? Click the button below!</h3>
      <div className='question-box'>
        <Card />
      </div>

    </div>
    
  )
}

export default App
