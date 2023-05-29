import React from 'react'
import './StuQuestions.css'

function StuQuestions(props){
  console.log(props);
  const currQuestion = props.questions[props.activeQue];

  return (
    <div>
      <p>{currQuestion.question}</p>
    </div> 
  )
}

export default StuQuestions