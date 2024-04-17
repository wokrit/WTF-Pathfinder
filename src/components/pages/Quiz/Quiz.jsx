import { useEffect, useState } from "react"
import './Quiz.css'
import Button from "../../layout/Button";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import data from "../../../data"
import ProgressBar from "../../layout/ProgressBar";
import Navbar from "../../layout/Navbar";




const { sections } = data;

function Quiz() {
    // const questions = [
    //     {
        
    //       question: "I am an introvert. Do you agree?",
    //       answers: [
    //         {
    //             answerID : 'A', 
    //             answerText: 'Stongly Disagree', 
    //             scores: { software_development: 10, mobile_development: 10 },
    //             uncheckedSVG: <div>
    //                                 <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 139 140" fill="none">                        
    //                                     <circle cx="69.5" cy="69.6768" r="66" stroke="url(#paint0_linear_623_104)" strokeWidth="7"/>
    //                                     <defs>
    //                                     <linearGradient id="paint0_linear_623_104" x1="153" y1="7.17676" x2="-6" y2="69.1768" gradientUnits="userSpaceOnUse">
    //                                     <stop stopColor="#938377"/>
    //                                     <stop offset="0.438983" stopColor="#D0AFD8"/>
    //                                     <stop offset="1" stopColor="#938377"/>
    //                                     </linearGradient>
    //                                     </defs>
    //                                 </svg>
    //                             </div>
    //                             ,
    //             checkedSVG: <div className="svg-container">
    //                             <svg className="circle-svg" xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 139 140" fill="none">
    //                                 <circle cx="69.5" cy="70.1539" r="66" fill="#A69486" stroke="#A69486" strokeWidth="7"/>
    //                             </svg>
    //                             <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 79" fill="none">
    //                                 <rect x="17.7261" y="0.985908" width="63" height="63" transform="rotate(15 17.7261 0.985908)" stroke="#A69486"/>
    //                                 <path d="M56.7746 28.1887C56.2714 27.7012 55.6771 27.3176 55.0256 27.06C54.374 26.8024 53.6781 26.6757 52.9776 26.6872C52.2771 26.6988 51.5858 26.8483 50.9431 27.1272C50.3004 27.4061 49.719 27.809 49.2321 28.3128L35.0564 42.9616L31.0494 36.0214C30.706 35.402 30.2428 34.8573 29.6866 34.4189C29.1304 33.9805 28.4925 33.6572 27.8101 33.468C27.1276 33.2788 26.4143 33.2273 25.7118 33.3167C25.0093 33.4061 24.3316 33.6345 23.7183 33.9886C23.105 34.3427 22.5684 34.8154 22.1397 35.3791C21.711 35.9428 21.3989 36.5862 21.2216 37.2719C21.0442 37.9575 21.0052 38.6715 21.1068 39.3724C21.2084 40.0733 21.4485 40.7469 21.8132 41.3539L29.3557 54.4179C30.0678 55.655 31.2379 56.5428 32.5927 56.9058L33.32 57.0455C34.1392 57.1466 34.9707 57.0562 35.7491 56.7814C36.5274 56.5065 37.2313 56.0548 37.8054 55.4617L56.8961 35.7304C57.3833 35.2273 57.7667 34.6331 58.0243 33.9817C58.2819 33.3304 58.4087 32.6347 58.3974 31.9344C58.3861 31.2341 58.237 30.5428 57.9585 29.9001C57.6801 29.2574 57.2778 28.6759 56.7746 28.1887Z" fill="#FAFAFA"/>
    //                             </svg>
    //                         </div>
    //         },
    //         {
    //             answerID : 'B', 
    //             answerText: 'Disagree', 
    //             scores: { product_management: 10, Product_Design: 10, ThreeD_Design: 10},
    //             uncheckedSVG: <div>
    //                                 <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 99 100" fill="none">
    //                                     <circle cx="49.5" cy="49.6772" r="46" stroke="url(#paint0_linear_136_806)" strokeWidth="7"/>
    //                                     <defs>
    //                                     <linearGradient id="paint0_linear_136_806" x1="106.28" y1="7.17725" x2="-1.84" y2="49.3372" gradientUnits="userSpaceOnUse">
    //                                     <stop stopColor="#938377"/>
    //                                     <stop offset="0.438983" stopColor="#D0AFD8"/>
    //                                     <stop offset="1" stopColor="#938377"/>
    //                                     </linearGradient>
    //                                     </defs>
    //                                 </svg>
    //                             </div>
    //                             ,
    //             checkedSVG: <div className="svg-container">
    //                             <svg className="circle-svg" xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 139 140" fill="none">
    //                                 <circle cx="69.5" cy="70.1539" r="66" fill="#A69486" stroke="#A69486" strokeWidth="7"/>
    //                             </svg>
    //                             <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 80 79" fill="none">-svg"
    //                                 <rect x="17.7261" y="0.985908" width="63" height="63" transform="rotate(15 17.7261 0.985908)" stroke="#A69486"/>
    //                                 <path d="M56.7746 28.1887C56.2714 27.7012 55.6771 27.3176 55.0256 27.06C54.374 26.8024 53.6781 26.6757 52.9776 26.6872C52.2771 26.6988 51.5858 26.8483 50.9431 27.1272C50.3004 27.4061 49.719 27.809 49.2321 28.3128L35.0564 42.9616L31.0494 36.0214C30.706 35.402 30.2428 34.8573 29.6866 34.4189C29.1304 33.9805 28.4925 33.6572 27.8101 33.468C27.1276 33.2788 26.4143 33.2273 25.7118 33.3167C25.0093 33.4061 24.3316 33.6345 23.7183 33.9886C23.105 34.3427 22.5684 34.8154 22.1397 35.3791C21.711 35.9428 21.3989 36.5862 21.2216 37.2719C21.0442 37.9575 21.0052 38.6715 21.1068 39.3724C21.2084 40.0733 21.4485 40.7469 21.8132 41.3539L29.3557 54.4179C30.0678 55.655 31.2379 56.5428 32.5927 56.9058L33.32 57.0455C34.1392 57.1466 34.9707 57.0562 35.7491 56.7814C36.5274 56.5065 37.2313 56.0548 37.8054 55.4617L56.8961 35.7304C57.3833 35.2273 57.7667 34.6331 58.0243 33.9817C58.2819 33.3304 58.4087 32.6347 58.3974 31.9344C58.3861 31.2341 58.237 30.5428 57.9585 29.9001C57.6801 29.2574 57.2778 28.6759 56.7746 28.1887Z" fill="#FAFAFA"/>
    //                             </svg>
    //                     </div>
    //         },
    //         {
    //             answerID : 'C', 
    //             answerText: 'Neutral', 
    //             scores: { cyber_security: 10, data_analysis: 10, blockchain_development: 10 },
    //             uncheckedSVG: <div>
    //                                 <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 75 76" fill="none">
    //                                     <circle cx="37.5" cy="38.1539" r="35" stroke="#A7A7A7" strokeWidth="5"/>
    //                                 </svg>
    //                             </div>,
    //             checkedSVG: <div className="svg-container">
    //                             <svg className="circle-svg" xmlns="http://www.w3.org/2000/svg" width="75" height="76" viewBox="0 0 75 76" fill="none">
    //                                 <circle cx="37.5" cy="38.1539" r="35" fill="#A7A7A7" stroke="#A7A7A7" strokeWidth="5"/>
    //                             </svg>
    //                             <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 80 79" fill="none">
    //                                 <rect x="17.7261" y="0.985908" width="63" height="63" transform="rotate(15 17.7261 0.985908)" stroke="#A7A7A7"/>
    //                                 <path d="M56.7746 28.1887C56.2714 27.7012 55.6771 27.3176 55.0256 27.06C54.374 26.8024 53.6781 26.6757 52.9776 26.6872C52.2771 26.6988 51.5858 26.8483 50.9431 27.1272C50.3004 27.4061 49.719 27.809 49.2321 28.3128L35.0564 42.9616L31.0494 36.0214C30.706 35.402 30.2428 34.8573 29.6866 34.4189C29.1304 33.9805 28.4925 33.6572 27.8101 33.468C27.1276 33.2788 26.4143 33.2273 25.7118 33.3167C25.0093 33.4061 24.3316 33.6345 23.7183 33.9886C23.105 34.3427 22.5684 34.8154 22.1397 35.3791C21.711 35.9428 21.3989 36.5862 21.2216 37.2719C21.0442 37.9575 21.0052 38.6715 21.1068 39.3724C21.2084 40.0733 21.4485 40.7469 21.8132 41.3539L29.3557 54.4179C30.0678 55.655 31.2379 56.5428 32.5927 56.9058L33.32 57.0455C34.1392 57.1466 34.9707 57.0562 35.7491 56.7814C36.5274 56.5065 37.2313 56.0548 37.8054 55.4617L56.8961 35.7304C57.3833 35.2273 57.7667 34.6331 58.0243 33.9817C58.2819 33.3304 58.4087 32.6347 58.3974 31.9344C58.3861 31.2341 58.237 30.5428 57.9585 29.9001C57.6801 29.2574 57.2778 28.6759 56.7746 28.1887Z" fill="#FAFAFA"/>
    //                             </svg>
    //                         </div>
    //         },
    //         {
    //             answerID : 'D', 
    //             answerText: 'Agree', 
    //             scores: { cyber_security: 10, data_analysis: 10, blockchain_development: 10 },
    //             uncheckedSVG: <div>
    //                                 <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 99 100" fill="none">
    //                                     <circle cx="49.5" cy="50.1539" r="46" transform="rotate(-90 49.5 50.1539)" stroke="url(#paint0_linear_136_809)" strokeWidth="7"/>
    //                                     <defs>
    //                                     <linearGradient id="paint0_linear_136_809" x1="29" y1="-5.84607" x2="50" y2="121.154" gradientUnits="userSpaceOnUse">
    //                                     <stop offset="0.157538" stopColor="#390746"/>
    //                                     <stop offset="0.679147" stopColor="#FBE9DB"/>
    //                                     <stop offset="0.975" stopColor="#720E8B"/>
    //                                     </linearGradient>
    //                                     </defs>
    //                                 </svg>
    //                             </div>,
    //             checkedSVG: <div className="svg-container">
    //                            <svg className="circle-svg" xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 99 100" fill="none">
    //                                 <circle cx="49.5" cy="50.1539" r="46" fill="#8A369E" stroke="#8A369E" strokeWidth="7"/>
    //                             </svg>
    //                             <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 67 67" fill="none">
    //                                 <path d="M47.2216 24.0343C46.797 23.623 46.2955 23.2994 45.7458 23.082C45.1961 22.8646 44.6089 22.7577 44.0179 22.7675C43.4268 22.7772 42.8435 22.9033 42.3012 23.1387C41.759 23.374 41.2684 23.7139 40.8576 24.139L28.8968 36.499L25.516 30.6432C25.2262 30.1206 24.8353 29.6609 24.3661 29.291C23.8968 28.9211 23.3586 28.6484 22.7828 28.4887C22.207 28.3291 21.6051 28.2857 21.0124 28.3611C20.4196 28.4365 19.8478 28.6292 19.3303 28.928C18.8129 29.2268 18.3601 29.6256 17.9984 30.1012C17.6367 30.5769 17.3734 31.1198 17.2237 31.6982C17.0741 32.2767 17.0412 32.8792 17.1269 33.4706C17.2126 34.0619 17.4152 34.6303 17.7229 35.1425L24.0869 46.1652C24.6877 47.209 25.675 47.9581 26.8181 48.2644L27.4318 48.3822C28.123 48.4675 28.8246 48.3913 29.4813 48.1594C30.138 47.9275 30.732 47.5464 31.2164 47.046L47.3241 30.3977C47.7352 29.9731 48.0587 29.4718 48.276 28.9222C48.4934 28.3726 48.6003 27.7857 48.5908 27.1948C48.5813 26.6039 48.4555 26.0206 48.2205 25.4784C47.9856 24.9361 47.6462 24.4454 47.2216 24.0343Z" fill="#FAFAFA"/>
    //                             </svg>
    //                         </div>
    //         },
    //         {
    //             answerID : 'E', 
    //             answerText: 'Strongly Agree', 
    //             scores: { cyber_security: 10, data_analysis: 10, blockchain_development: 10 },
    //             uncheckedSVG: <div>
    //                                 <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 140 140" fill="none">
    //                                     <circle cx="69.5886" cy="70.0653" r="66" transform="rotate(-89.9187 69.5886 70.0653)" stroke="url(#paint0_linear_136_826)" strokeWidth="7"/>
    //                                     <defs>
    //                                     <linearGradient id="paint0_linear_136_826" x1="39.4416" y1="-12.2877" x2="70.3239" y2="174.477" gradientUnits="userSpaceOnUse">
    //                                     <stop offset="0.157538" stopColor="#390746"/>
    //                                     <stop offset="0.679147" stopColor="#FBE9DB"/>
    //                                     <stop offset="0.975" stopColor="#720E8B"/>
    //                                     </linearGradient>
    //                                     </defs>
    //                                 </svg>
    //                             </div>,
    //             checkedSVG: <div className="svg-container">
    //                            <svg className="circle-svg" xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 139 140" fill="none">
    //                                 <circle cx="69.5" cy="69.9767" r="66" fill="#8A369E" stroke="#8A369E" strokeWidth="7"/>
    //                             </svg>
    //                             <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 79" fill="none">
    //                                 <path d="M56.7746 28.0114C56.2714 27.5239 55.6771 27.1404 55.0256 26.8828C54.374 26.6251 53.6781 26.4985 52.9776 26.51C52.2771 26.5215 51.5858 26.671 50.9431 26.9499C50.3004 27.2289 49.719 27.6317 49.2321 28.1355L35.0564 42.7844L31.0494 35.8442C30.706 35.2248 30.2428 34.68 29.6866 34.2416C29.1304 33.8032 28.4925 33.48 27.8101 33.2907C27.1276 33.1015 26.4143 33.0501 25.7118 33.1395C25.0093 33.2289 24.3316 33.4573 23.7183 33.8114C23.105 34.1655 22.5684 34.6381 22.1397 35.2019C21.711 35.7656 21.3989 36.409 21.2216 37.0946C21.0442 37.7802 21.0052 38.4943 21.1068 39.1952C21.2084 39.896 21.4485 40.5696 21.8132 41.1767L29.3557 54.2406C30.0678 55.4778 31.2379 56.3655 32.5927 56.7286L33.32 56.8682C34.1392 56.9693 34.9707 56.8789 35.7491 56.6041C36.5274 56.3293 37.2313 55.8776 37.8054 55.2845L56.8961 35.5532C57.3833 35.05 57.7667 34.4558 58.0243 33.8045C58.2819 33.1532 58.4087 32.4575 58.3974 31.7571C58.3861 31.0568 58.237 30.3656 57.9585 29.7229C57.6801 29.0802 57.2778 28.4986 56.7746 28.0114Z" fill="#FAFAFA"/>
    //                             </svg>
    //                         </div>
    //         }
    //       ],
          
    //     },

    //     {
        
    //         question: "I am very good leader. Do you agree?",
    //         answers: [
    //           {answerID : 'A', answerText: 'Agree', scores: { product_management: 10 }},
    //           {answerID : 'B', answerText: 'Disagree', scores: { }},
    //           {answerID : 'C', answerText: 'Neutral', scores: { }}
    //         ]
    //     }
            
    // ];
    
      
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
                  Mobile_: (prevScores.Mobile_ || 0) + 15,
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
                        <ProgressBar score={currentQuestion + 1} showPercentage={false} />
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
                    
                    

                    {/* {currentSection === sections.length - 1 && currentQuestion === sections[currentSection].questions.length - 1
                        ?
                        <Button variant="primary" onClick={handleNextQuestion}>
                            Finish
                        </Button>
                        :
                        " "
                    } */}
                    
                    
                </div>
            </div>
        ) : (
            <div style={{width:"80%", boxSizing:"border-box", margin:"auto"}}>
                <h2>Final Scores</h2>
                
            {Object.entries(finalScores).map(([track, score]) => (
            // <li className="scores-container" key={track}>{track}: {score}</li>
            // <div>
            //     {track}: <span><ProgressBar key={track} filled={score} /></span>
            // </div>

            <div className="final-scores" key={track}>
                <div className="tracks-list">
                    {formatTrackName(track)}:{' '}
                </div>
                <div className="score-bars">  
                    <ProgressBar score={score} showPercentage={true}/> {/* Pass the score as a prop */}    
                </div>
            </div>
            
            ))}
                
            </div>
            
        )}
      
        
                
                
    
            
    </>
  )
}

export default Quiz
