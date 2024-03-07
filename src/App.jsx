import { useState } from 'react'
import './App.css'
import questions from './Questions'



function App() {

  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * questions.length)
    setCurrentCard(randomIndex)
    setShowAnswer(false)
  }

  const handleClick = () => {
    if(!showAnswer){
      setShowAnswer(true)
    } else {
      setShowAnswer(false)
    }
  }

  return (
    <div className='container'>
      <h1>Psychology Facts</h1>
      <h3>Want to test your psychology knowledge? Click the button below!</h3>
      <h4>There are { questions.length } cards in this quiz</h4>
      <div className='question-box' onClick={ handleClick }>
        { !showAnswer && <h2>{ questions[currentCard].question }</h2> }
        { showAnswer && <h2>{ questions[currentCard].answer }</h2> }
      </div>

      <button onClick={nextCard}>
          Next
        </button>

    </div>
    
  )
}

export default App
