import { useState } from "react";

const Form = () => {
    const [answer, setAnswer] = useState('')

    const checkAnswer = () => {
        
    }


    return (
        <div className="textbox">
            <label>
                Enter you guess here: 
                <input
                    type="text"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    
                />
            </label>
            {console.log(answer)}
            <button type='submit' onClick={checkAnswer}>
                Submit
            </button>
        </div>
    )
}

export default Form