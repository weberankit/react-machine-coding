import React, { useState } from 'react';


const questionsAnswers = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.'
  },
  {
    question: 'What are components in React?',
    answer: 'Components are reusable pieces of code that render a part of the UI.'
  } 
];

const Accordion =()=>{

const [upadate , setUpdate] =useState(0)

console.log("rendering-1" , Math.random())
return(


questionsAnswers.map((item,index)=>{
    return(
        <div onClick={()=>setUpdate(index)}>
          <p> {item.question}</p> 
          {upadate === index && <p>{item.answer}</p> }

         
        </div>



    ) 
    
})    




)


}



export default Accordion;
















