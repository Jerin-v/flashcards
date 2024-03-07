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

  const showCard = () => {
    if(!showAnswer) {
      return 
      { questions[currentCard].question }
    } else {
      return
      <h2>{ questions[currentCard].answer }</h2>
    }
  }


  return (
    <div className='container'>
      <h1>Psychology Facts</h1>
      <h3>Want to test your psychology knowledge? Click the button below!</h3>
      <div className='question-box' onClick={ handleClick }>
        <h2>{ console.log(showAnswer) }</h2>
      </div>

      <button onClick={nextCard}>
          Next
        </button>

    </div>
    
  )
}

export default App
