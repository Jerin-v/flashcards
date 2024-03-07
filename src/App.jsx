import { useState } from 'react'
import './App.css'
import questions from './Questions'



function App() {


  const [currentCard, setCurrentCard] = useState(0)

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * questions.length)
    setCurrentCard(randomIndex)
  }


  return (
    <div className='container'>
      <h1>Psychology Facts</h1>
      <h3>Want to test your psychology knowledge? Click the button below!</h3>
      <div className='question-box'>
        <h2 className='questions'>{ questions[currentCard].question }</h2>

        <h2 className='answer'>{ questions[currentCard].answer }</h2>
      </div>

      <button onClick={nextCard}>
          Next
        </button>

    </div>
    
  )
}

export default App
