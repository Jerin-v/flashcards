import { useState } from 'react'
import './App.css'
import questions from './Questions'



function App() {

  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const nextCard = () => {
    if(currentCard === questions.length - 1) {
      return
    } else {
      setCurrentCard(currentCard + 1)
    }
    setShowAnswer(false)
  }

  const prevCard = () => {
    if(currentCard === 0) {
      return
    } else {
      setCurrentCard(currentCard - 1)
    }
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
      <div className='text'>
        <h1>Psychology Facts</h1>
        <h3>Want to test your psychology knowledge? Click the button below!</h3>
        <h4>Number of Cards: { questions.length }</h4>
      </div>
      <div className='question-box' onClick={ handleClick }>
        { !showAnswer && <h2>{ questions[currentCard].question }</h2> }
        { showAnswer && <h2>{ questions[currentCard].answer }</h2> }
        {console.log(currentCard)}
      </div>

      <button onClick={prevCard}>
        Previous
      </button>
      
      <button onClick={nextCard}>
          Next
        </button>

    </div>
    
  )
}

export default App
