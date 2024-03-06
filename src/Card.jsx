const Card = () => {
    const questions = [
        {id: 0, question: "How many recognized phobias exist?", answer: "There are more than 400 phobias well recognized by psychologists"},
        {id: 1, question: "What does the type of music you listen to affect?", answer: "The type of music you listen to affects the way you perceive the world"}
    ]

      const q1 = questions
      
      return (
        <div>
            { console.log(Object.entries(questions).map( ([key, value]) => `Question: ${key}   Answer: ${value}`)) }
        </div>
      )
}

export default Card