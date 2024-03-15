import { useState } from "react";

const Form = () => {
    const [answer, setAnswer] = useState('')

    const checkAnswer = () => {
        
    }


    return (
        <div>
            <label>
                Can you guess the answer? 
                <input
                    type="text"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                />
            </label>
        </div>
    )
}

export default Form