import { useEffect, useState } from "react"
import './Quiz.css'
import Button from "../../layout/Button";
import data from "../../../data"
import ProgressBar from "../../layout/ProgressBar";
import Navbar from "../../layout/Navbar";
import renderTrackMessage from "../../layout/TrackRecommendation";
import Footer from "../Home/landing/Footer";



const { sections } = data;

function Quiz() {
        
    //creating useStates for the questions, scores for each track in each answer option and the final scores
    const [currentSection, setCurrentSection] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [trackScores, setTrackScores] = useState({
        Software_Development: 0,
        Mobile_Development: 0,
        Product_Design: 0,
        Product_Management: 0,
        Cyber_Security: 0,
        Data_Analysis: 0,
        Blockchain_Development: 0,
        ThreeD_Animation: 0
    });
    // const [showScore, setShowScore] = useState(false)
    const [finalScores, setFinalScores] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [marks, setMarks] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [highestScoringTrack, setHighestScoringTrack] = useState(null);
    
    const handleResponse = (answerID, correct, scores={}) => {
        setSelectedAnswer(answerID);
        setErrorMsg(null)

        console.log("section:", currentSection)
        console.log("status:", correct)
        if (currentSection === 0 && correct) {    
            setMarks(prev => prev + 1)
            // console.log("what")
        }
        
        if (currentSection > 0) {
            setTrackScores(prevScores => {
                const updatedScores = { ...prevScores };
                for (const track in updatedScores) {
                    updatedScores[track] += scores[track] || 0
                }
                return updatedScores;
            })
            
        } 
        
    };

    const handleNextQuestion = () => {
        console.log(marks)
        console.log(trackScores)
        console.log(currentSection === 0 && currentQuestion === sections[currentSection].questions.length - 1)
        if (currentSection === 0 && currentQuestion === sections[currentSection].questions.length - 1) {
          // Last question of the "Mathematics" section
          calculateMathScores();
          setCurrentSection(prev => prev + 1);
          setCurrentQuestion(0)
        } else if (currentSection === 1 && currentQuestion === sections[currentSection].questions.length - 1) {
            calculateLogicScores();
            setCurrentSection(prev => prev + 1);
            setCurrentQuestion(0)
        } else if (currentQuestion < sections[currentSection].questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
        } else if (currentSection < sections.length - 1) {
          setCurrentQuestion(0);
          setCurrentSection(prev => prev + 1);
        } else {
          // Last question in the last section (other than "Mathematics"), calculate final scores again
          calculateFinalScores();
        }
        setSelectedAnswer(null)
    };

    const calculateMathScores = () => {
        const mathSection = sections.find(section => section.title === "Mathematical Aptitude");

        // Adjust scores based on marks
        if (mathSection) {
            if (marks === 5) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  Data_Analysis: (prevScores.Data_Analysis || 0) + 25
                }));
              } else if (marks === 4) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  Software_Development: (prevScores.Software_Development || 0) + 20,
                  Cyber_Security: (prevScores.Cyber_Security || 0) + 20
                }));
              } else if (marks === 3) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  Mobile_Development: (prevScores.Mobile_Development || 0) + 15,
                  ThreeD_Animation: (prevScores.ThreeD_Animation || 0) + 15
                }));
              } else if (marks <= 2) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  Product_Design: (prevScores.Product_Design || 0) + 10,
                  Product_Management: (prevScores.Product_Management || 0) + 10
                }));
            }
        }
    }

    const calculateLogicScores = () => {
        const logicSection = sections.find(section => section.title === "Logical Reasoning");

        // Adjust scores based on marks
        if (logicSection) {
            if (marks === 5) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  Data_Analysis: (prevScores.Data_Analysis || 0) + 25,
                  Cyber_Security: (prevScores.Cyber_Security || 0) + 25
                }));
              } else if (marks === 4) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  Software_Development: (prevScores.Software_Development || 0) + 20,
                }));
              } else if (marks === 3) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  ThreeD_Animation: (prevScores.ThreeD_Animation || 0) + 15
                }));
              } else if (marks <= 2) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  Product_Design: (prevScores.Product_Design || 0) + 10,
                  Product_Management: (prevScores.Product_Management || 0) + 10,
                  Mobile_Development: (prevScores.Mobile_Development || 0) + 10
                }));
            }
        }
    }

    const calculateFinalScores = () => {
    
        setFinalScores(trackScores);
    };
    
    

    // Ensure final scores are calculated once all questions are answered
    if (finalScores === null && currentQuestion === sections[currentSection].questions.length) {
    calculateFinalScores();
    }

    useEffect( () => {
        return () => {
            setSelectedAnswer('')
        }
    }, [currentSection, currentQuestion])
    //  console.log(sections)  

    const formatTrackName = (trackName) => {
        return trackName.replace(/_/g, ' ');
    }


     // Function to calculate the highest scoring track
     const calculateHighestScoringTrack = () => {
        if (!finalScores) return;

        let highestScore = -Infinity;
        let highestTrack = null;

        for (const [track, score] of Object.entries(finalScores)) {
            if (score > highestScore) {
                highestScore = score;
                highestTrack = track;
            }
        }

        setHighestScoringTrack(highestTrack);
    };

    useEffect(() => {
        calculateHighestScoringTrack();
    }, [finalScores]);
    

  return (
    <>
        <Navbar />


        {finalScores === null ? (
            <div className="quiz-box">
                <header className="quiz-header">
                    {(currentSection !== 0 || currentQuestion !== 0) && (
                        <div className="back-button" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13.8302 19.0003C13.6808 19.0008 13.5332 18.9678 13.3982 18.9038C13.2632 18.8398 13.1443 18.7463 13.0502 18.6303L8.22016 12.6303C8.07308 12.4513 7.99268 12.2269 7.99268 11.9953C7.99268 11.7637 8.07308 11.5392 8.22016 11.3603L13.2202 5.36028C13.3899 5.15606 13.6338 5.02763 13.8982 5.00325C14.1627 4.97888 14.4259 5.06054 14.6302 5.23028C14.8344 5.40001 14.9628 5.64393 14.9872 5.90835C15.0116 6.17278 14.9299 6.43606 14.7602 6.64028L10.2902 12.0003L14.6102 17.3603C14.7324 17.5071 14.8101 17.6858 14.834 17.8753C14.8579 18.0649 14.827 18.2573 14.7449 18.4299C14.6629 18.6024 14.5331 18.7478 14.371 18.8489C14.2089 18.95 14.0212 19.0025 13.8302 19.0003Z" fill="#424242"/>
                            </svg>
                            <p style={{fontWeight:"600"}}>Back</p>
                        </div>
                    )}
                    <div className="header-title">
                        <h1>{sections[currentSection].title}</h1>
                        <h5 style={{fontSize:"16px", fontWeight:"500"}}>Section {currentSection + 1} of {sections.length}</h5>  
                    </div>
                </header>
                
                <div className="question-answers">
                    <div className="quiz-progress">
                        <ProgressBar score={currentQuestion + 1} showPercentage={false} backgroundImage={false} />
                    </div>
                    
                    <div id='question'>
                        {/* <h4><span>Question {currentQuestion + 1}</span>/{questions.length}</h4> */}
                        {/* <p>{questions[currentQuestion].question}</p> */}
                        <p>{sections[currentSection].questions[currentQuestion].question}</p>
                    </div>
                    <div id='answers'>
                        <ul>
                            {sections[currentSection].questions[currentQuestion].answers.map((answer) => {
                                const{ answerID, answerText, scores } = answer

                            return(
                                <li key={answerID}>
                                    {/* <span>{answerID}</span> */}
                                    {/* {uncheckedSVG} */}
                                    <div onClick={() => answer.correct? handleResponse(answerID, answer?.correct, scores): handleResponse(answerID, "", scores)}>
                                        {
                                            selectedAnswer === answerID 
                                            ? 
                                            // <FaCircleCheck style={{ width: '44px', height: '44px', color:'#5F0C74' }} />
                                            <div className="svg-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 99 100" fill="none">
                                                    <circle cx="49.5" cy="50.1539" r="46" fill="#8A369E" stroke="#8A369E" strokeWidth="7"/>
                                                </svg>
                                                <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 80 79" fill="none">
                                                    <rect x="17.7261" y="0.985908" width="63" height="63" transform="rotate(15 17.7261 0.985908)"/>
                                                    <path d="M56.7746 28.1887C56.2714 27.7012 55.6771 27.3176 55.0256 27.06C54.374 26.8024 53.6781 26.6757 52.9776 26.6872C52.2771 26.6988 51.5858 26.8483 50.9431 27.1272C50.3004 27.4061 49.719 27.809 49.2321 28.3128L35.0564 42.9616L31.0494 36.0214C30.706 35.402 30.2428 34.8573 29.6866 34.4189C29.1304 33.9805 28.4925 33.6572 27.8101 33.468C27.1276 33.2788 26.4143 33.2273 25.7118 33.3167C25.0093 33.4061 24.3316 33.6345 23.7183 33.9886C23.105 34.3427 22.5684 34.8154 22.1397 35.3791C21.711 35.9428 21.3989 36.5862 21.2216 37.2719C21.0442 37.9575 21.0052 38.6715 21.1068 39.3724C21.2084 40.0733 21.4485 40.7469 21.8132 41.3539L29.3557 54.4179C30.0678 55.655 31.2379 56.5428 32.5927 56.9058L33.32 57.0455C34.1392 57.1466 34.9707 57.0562 35.7491 56.7814C36.5274 56.5065 37.2313 56.0548 37.8054 55.4617L56.8961 35.7304C57.3833 35.2273 57.7667 34.6331 58.0243 33.9817C58.2819 33.3304 58.4087 32.6347 58.3974 31.9344C58.3861 31.2341 58.237 30.5428 57.9585 29.9001C57.6801 29.2574 57.2778 28.6759 56.7746 28.1887Z" fill="#FAFAFA"/>
                                                </svg>
                                            </div>
                                            : 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 71 70" fill="none">
                                                <circle cx="35.5889" cy="35" r="32.5" transform="rotate(-90 35.5889 35)" stroke="url(#paint0_linear_1070_206)" strokeWidth="5"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_1070_206" x1="21.1183" y1="-4.52941" x2="35.9418" y2="85.1176" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.157538" stopColor="#390746"/>
                                                <stop offset="0.679147" stopColor="#FBE9DB"/>
                                                <stop offset="0.975" stopColor="#720E8B"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                            // <FaRegCircle  style={{ width: '44px', height: '44px', color:'#5F0C74' }}/>
                                        }
                                    </div>
                                
                                    <p>
                                        {answerText}
                                        
                                    </p>
                                    
                                    
                                </li>
                            )})}
                            {errorMsg && <span style={{color:"red", fontSize:"14px", fontWeight:"400"}}>{errorMsg}</span>}
                        </ul>
                        <svg className="quiz-element" xmlns="http://www.w3.org/2000/svg" width="438" height="412" viewBox="0 0 438 412" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M116.536 359.515C211.858 398.541 320.768 352.905 359.795 257.584C383.44 199.831 376.006 137.089 345.274 87.9245C370.596 89.8781 396.049 95.7544 420.818 105.895C548.595 158.209 609.769 304.202 557.455 431.978C505.141 559.755 359.149 620.93 231.372 568.616C134.454 528.936 75.8534 435.362 76.0295 336.72C88.2589 345.782 101.804 353.483 116.536 359.515ZM76.0295 336.72C9.13093 287.148 -18.3896 196.846 14.6051 116.257C53.6315 20.9354 162.542 -24.7008 257.863 14.3255C295.432 29.7067 325.282 55.9431 345.274 87.9245C239.962 79.8002 136.908 139.524 94.7347 242.532C82.1005 273.391 76.0856 305.313 76.0295 336.72Z" fill="#E3CFE8" fillOpacity="0.3"/>
                        </svg>
                    </div>

                    
                    
                    {/* <Button variant="primary" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                        Next
                    </Button> */}
                    
                    <Button variant="primary" onClick={()=>{
                        if (!selectedAnswer) {
                            setErrorMsg("Please select an option")
                            return
                        }
                        selectedAnswer && handleNextQuestion()
                    }}>
                        {currentQuestion < sections[currentSection].questions.length - 1
                        ? "Next Question"
                        : currentSection < sections.length - 1
                        ? "Next Section"
                        : "Finish Assesment"}
                    </Button>
                    
                    
                </div>
            </div>
        ) : (
            <div style={{width:"80%", boxSizing:"border-box", margin:"auto"}}>

                
                {/* Render the recommended track and message */} 
                {highestScoringTrack && (
                    <div className="recommendations">
                        <div className="recommendation">
                            <div className="recommendation-track">
                                <p>Your recommended track is: </p>
                                <h1 style={{color:"#5F0C74"}}> {formatTrackName(highestScoringTrack)}</h1>
                                <img className="confetti1" alt="confetti" src="..\src\assets\Recomendation confetti.png"></img>
                                <img className="confetti2" alt="confetti" src="..\src\assets\Recommendation confetti 2.png"></img>
                            </div>
                            <div className="recommendation-message">
                                <div className="career-match">Your Career match is: <span style={{color:"#5F0C74"}}> {formatTrackName(highestScoringTrack)}</span> </div>
                                <p>{renderTrackMessage(highestScoringTrack)}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="result">
                    <h2>Your Result Breakdown</h2>
                    
                    
                    {Object.entries(finalScores).map(([track, score]) => (
                    // <li className="scores-container" key={track}>{track}: {score}</li>
                    // <div>
                    //     {track}: <span><ProgressBar key={track} filled={score} /></span>
                    // </div>
    
                    <div className="final-scores" key={track}>
                        <div className="tracks-list">
                            <div style={{fontSize:"14px", fontWeight:"600", color:"#424242"}}>{formatTrackName(track)} - {score}%</div>
                        </div>
                        <div className="score-bars">  
                            <ProgressBar score={score} showPercentage={false} backgroundImage={true}/> {/* Pass the score as a prop */}    
                        </div>
                    </div>
                    
                    ))}
                </div>
            </div>


         
            
        )}
      
      <Footer />   
                
                
    
            
    </>
  )
}

export default Quiz
