import { useState } from 'react'
import './App.css'
import questions from './Questions'




function App() {

  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answer, setAnswer] = useState('')
  const [check, setCheck] = useState('')

  const nextCard = () => {
    if(currentCard === questions.length - 1) {
      return
    } else {
      setCurrentCard(currentCard + 1)
    }
    setShowAnswer(false)
    setAnswer('')
    setCheck('')
  }

  const prevCard = () => {
    if(currentCard === 0) {
      return
    } else {
      setCurrentCard(currentCard - 1)
    }
    setShowAnswer(false)
    setAnswer('')
    setCheck('')
  }

  const shuffle = () => {
    for(var i = questions.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = questions[i];
      questions[i] = questions[j];
      questions[j] = temp;
    }
  }

  const handleClick = () => {
    if(!showAnswer){
      setShowAnswer(true)
    } else {
      setShowAnswer(false)
    }
  }

  const checkAnswer = () => {
    if(answer == questions[currentCard].answer) {
        setCheck("correct")
    } else {
        setCheck("wrong")
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
      </div>
      

      <div className="textbox">
            <label>
                Enter you guess here: 
                <input
                    id={check}
                    type="text"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    
                />
            </label>
            <button type='submit' onClick={checkAnswer}>
                Submit
            </button>
        </div>

      <div className='buttons'>
        <button onClick={prevCard}>
          Previous
        </button>
        
        <button onClick={nextCard}>
            Next
        </button>

        <button onClick={shuffle}>
            Shuffle
        </button>
      </div>

    </div>
    
  )
}

export default App
