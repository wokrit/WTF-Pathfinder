import Button from '../../layout/Button'
import './Quiz.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Spinner from '../../layout/Spinner';
import Navbar from '../../layout/Navbar';


function Instructions() {
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true); // Show spinner
        // Perform any async operations here, such as fetching data or other tasks
        setTimeout(() => {
            // After a delay or when the operation is completed
            navigate("/quiz"); // Navigate to the next page
        }, 1000); // Example delay in milliseconds
    };
  return (
    <>
        <Navbar />
        <br/><br/>
        <div className='quiz-box'>
            <div className="question-answers">
                <header className='header-title'>
                    <h1>Welcome to the <span style={{color:"#89369E"}}>Pathfinder</span> assessment platform!</h1>
                    <p>Before you begin, please take a moment to review the instructions below to ensure a smooth and accurate assessment experience.</p>
                </header>
                <div className='instructions-content'>
                    <div className='instruction-point'>
                        <img src='\images\emojione_alarm-clock.svg' alt='alarm-clock' style={{width:"40px", height:"40px"}}/>
                        <div className='instruction'>
                           <p style={{fontWeight:"600"}}>Take Your Time:</p> 
                           <p>
                           The Pathfinder assessment contains 50 questions. There is no time limit It's essential to take your time and carefully consider each question before responding. Rushing through the assessment may not yield the most accurate results.
                           </p>
                        </div>
                    </div>
                    <div className='instruction-point'>
                        <img src='\images\exclamation-question-mark.svg' alt='question-mark' style={{width:"32px", height:"32px"}}/>
                        <div className='instruction'>
                           <p style={{fontWeight:"600"}}>Two Types of Questions:</p> 
                           <p>
                                Throughout the assessment, you will encounter two types of questions: ltiple choice questions and Agree/Disagree statements. Consider each question carefully and choose the response that aligns most closely with your thoughts or feelings.                               
                           </p>
                        </div>
                    </div>
                    <div className='instruction-point'>
                        <img src='\images\token_idea.svg' alt='idea'style={{width:"52px", height:"52px"}} />    
                        <div className='instruction'>
                           <p style={{fontWeight:"600"}}>Answer Honestly:</p> 
                           <p>
                           The effectiveness of the assessment relies on your honest and genuine responses. There are no right or wrong answers, so please answer each question truthfully based on your own experiences, preferences, and personality.
                           </p>
                        </div>
                    </div>
                </div>
                <div className='instructions-CTA'>
                    <Button variant="primary" onClick={handleClick} disabled={isLoading}>
                        {isLoading ? <Spinner /> : "Start Test"}
                    </Button>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Instructions
