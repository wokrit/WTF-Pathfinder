import { useState } from "react"
import './Quiz.css'

function Quiz() {
    const questions = [
        {
        
          question: "I am an introvert. Do you agree?",
          answers: [
            {answerID : 'A', answerText: 'Agree', scores: { software_development: 10, mobile_development: 10 }},
            {answerID : 'B', answerText: 'Disagree', scores: { product_management: 10, product_design: 10, ThreeD_Design: 10}},
            {answerID : 'C', answerText: 'Neutral', scores: { cyber_security: 10, data_analysis: 10, blockchain_development: 10 }}
          ]
        },

        {
        
            question: "I am very good leader. Do you agree?",
            answers: [
              {answerID : 'A', answerText: 'Agree', scores: { product_management: 10 }},
              {answerID : 'B', answerText: 'Disagree', scores: { }},
              {answerID : 'C', answerText: 'Neutral', scores: { }}
            ]
        }
            
    ];
      
    //creating useStaes for the questions, scores for each track in each answer option and the final scores
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [trackScores, setTrackScores] = useState({
        software_development: 0,
        mobile_development: 0,
        product_design: 0,
        product_management: 0,
        cyber_security: 0,
        data_analysis: 0,
        blockchain_development: 0,
        ThreeD_Design: 0
    });
    // const [showScore, setShowScore] = useState(false)
    const [finalScores, setFinalScores] = useState(null);

    

    const handleResponse = (answerText, answerId, scores) => {
        setTrackScores(prevScores => {
          const updatedScores = { ...prevScores };
          Object.keys(scores).forEach(track => {
            updatedScores[track] += scores[track];
          });
          return updatedScores;
        });
        setCurrentQuestion(currentQuestion + 1);
    };

    const calculateFinalScores = () => {
    setFinalScores(trackScores);
    };

    // Ensure final scores are calculated once all questions are answered
    if (finalScores === null && currentQuestion === questions.length) {
    calculateFinalScores();
    }
       

  return (
    <>
      {currentQuestion < questions.length  ? (
            <div className="quiz-box">
                <div id='question'>
                    <h4><span>Question {currentQuestion + 1}</span>/{questions.length}</h4>
                    <p>{questions[currentQuestion].question}</p>
                </div>
                <div id='answers'>
                    <ul>
                        {questions[currentQuestion].answers.map(({ answerID, answerText, scores }) => (
                            <li key={answerID}>
                                <span>{answerID}</span>
                                <p onClick={() => handleResponse(answerText, answerID, scores)}>
                                    {answerText}
                                </p>
                            </li>
                        ))}
                    </ul>
                    

                    
                    
                </div>
            </div>
        ) : (
                finalScores ? (
                    <div>
                    <h2>Final Scores</h2>
                    <ul>
                        {Object.entries(finalScores).map(([track, score]) => (
                        <li key={track}>{track}: {score}</li>
                        ))}
                    </ul>
                    </div>
                ) : (
                    calculateFinalScores()
                )
        )}
    </>
  )
}

export default Quiz
