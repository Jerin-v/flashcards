import { useState } from 'react'
import './App.css'
import questions from './Questions'




function App() {

  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answer, setAnswer] = useState('')
  const [check, setCheck] = useState('')
  const [winCount, setWinCount] = useState(0)
  const [winStreak, setWinStreak] = useState(0)

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
        setWinCount(winCount + 1)
    } else {
        setCheck("wrong")
        setWinCount(0)
        streak()
    }
  }

  const streak = () => {
    if(winCount > winStreak) {
      setWinStreak(winCount)
    }
  }

  return (
    <div className='container'>
      <div className='text'>
        <h1>Fun Facts</h1>
        <h3>Want to test your fun fact knowledge? Click the button below!</h3>
        <h4>Number of Cards: { questions.length }</h4>
        <h5>Current Streak: {winCount}  Longest Win Streak: {winStreak}</h5>
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
