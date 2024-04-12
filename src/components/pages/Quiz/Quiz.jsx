import { useEffect, useState } from "react"
import './Quiz.css'
import Button from "../../layout/Button";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

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
    //             scores: { product_management: 10, product_design: 10, ThreeD_Design: 10},
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
    const sections = [
        {
            title: "Mathematics",
            questions: [
                {
                    question: "2 + 2 = ?",
                    answers: [
                      {
                          answerID : 'A', 
                          answerText: '4', 
                          correct: true
                      },
                      {
                          answerID : 'B', 
                          answerText: '5', 
                          correct: false
                      },
                      {
                          answerID : 'C', 
                          answerText: '6', 
                          correct: false
                      },
                      {
                          answerID : 'D', 
                          answerText: '7', 
                          correct: false
                      },
                      {
                          answerID : 'E', 
                          answerText: '8', 
                          correct: false
                      }
                    ],
                    
                },
          
                {
                    question: "What is the square root of 100?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: '6', 
                            correct: false
                        },
                        {
                            answerID : 'B', 
                            answerText: '8', 
                            correct: false
                        },
                        {
                            answerID : 'C', 
                            answerText: '10', 
                            correct: true
                        },
                        {
                            answerID : 'D', 
                            answerText: '12', 
                            correct: false
                        },
                        {
                            answerID : 'E', 
                            answerText: '5', 
                            correct: false
                        }
                    ]
                },
                {
                    question: "What is the square root of 64?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: '6', 
                            correct: false
                        },
                        {
                            answerID : 'B', 
                            answerText: '8', 
                            correct: true
                        },
                        {
                            answerID : 'C', 
                            answerText: '10', 
                            correct: false
                        },
                        {
                            answerID : 'D', 
                            answerText: '12', 
                            correct: false
                        },
                        {
                            answerID : 'E', 
                            answerText: '5', 
                            correct: false
                        }
                    ]
                },
                {
                    question: "What is the square of 4?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: '16', 
                            correct: true
                        },
                        {
                            answerID : 'B', 
                            answerText: '8', 
                            correct: false
                        },
                        {
                            answerID : 'C', 
                            answerText: '10', 
                            correct: false
                        },
                        {
                            answerID : 'D', 
                            answerText: '12', 
                            correct: false
                        },
                        {
                            answerID : 'E', 
                            answerText: '5', 
                            correct: false
                        }
                    ]
                },
                {
                    question: "What is the square root of 49?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: '6', 
                            correct: false
                        },
                        {
                            answerID : 'B', 
                            answerText: '7', 
                            correct: true
                        },
                        {
                            answerID : 'C', 
                            answerText: '10', 
                            correct: false
                        },
                        {
                            answerID : 'D', 
                            answerText: '12', 
                            correct: false
                        },
                        {
                            answerID : 'E', 
                            answerText: '5', 
                            correct: false
                        }
                    ]
                }
            ]
        },
        {
            title: "Logical Abilities",
            questions: [
                {
                    question: "I am an introvert. Do you agree?",
                    answers: [
                      {
                          answerID : 'A', 
                          answerText: 'Stongly Disagree', 
                          scores: { software_development: 10, mobile_development: 10 }
                      },
                      {
                          answerID : 'B', 
                          answerText: 'Disagree', 
                          scores: { product_management: 10, product_design: 10, ThreeD_Design: 10}
                      },
                      {
                          answerID : 'C', 
                          answerText: 'Neutral', 
                          scores: { cyber_security: 10, data_analysis: 10, blockchain_development: 10 }
                      },
                      {
                          answerID : 'D', 
                          answerText: 'Agree', 
                          scores: { cyber_security: 10, data_analysis: 10, blockchain_development: 10 }
                      },
                      {
                          answerID : 'E', 
                          answerText: 'Strongly Agree', 
                          scores: { cyber_security: 10, data_analysis: 10, blockchain_development: 10 }
                      }
                    ],
                    
                },
          
                {
                    question: "I am very good leader. Do you agree?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: 'Agree', 
                            scores: { product_management: 10 }
                        },
                        {
                            answerID : 'B', 
                            answerText: 'Disagree', 
                            scores: { software_development: 10}
                        },
                        {
                            answerID : 'C', 
                            answerText: 'Neutral', 
                            scores: { cyber_security: 0}
                        }
                    ]
                }
            ]
        }
      
            
    ];
      
    //creating useStates for the questions, scores for each track in each answer option and the final scores
    const [currentSection, setCurrentSection] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [trackScores, setTrackScores] = useState({
        software_development: 0,
        mobile_development: 0,
        product_design: 0,
        product_management: 0,
        cyber_security: 0,
        data_analysis: 0,
        blockchain_development: 0,
        threeD_Design: 0
    });
    // const [showScore, setShowScore] = useState(false)
    const [finalScores, setFinalScores] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [marks, setMarks] = useState(0)

    

    const handleResponse = (answerID, correct, scores={}) => {
        setSelectedAnswer(answerID);

        console.log("section:", currentSection)
        console.log("status:", correct)
        if (currentSection === 0 && correct) {    
            setMarks(prev => prev + 1)
            console.log("what")
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
        if (currentSection === 0 && currentQuestion === sections[currentSection].questions.length - 1) {
          // Last question of the "Mathematics" section
          calculateMathScores();
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
    };

    const calculateMathScores = () => {
        const mathSection = sections.find(section => section.title === "Mathematics");

        // Adjust scores based on marks
        if (mathSection) {
            if (marks === 5) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  data_analysis: (prevScores.data_analysis || 0) + 25
                }));
              } else if (marks === 4) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  software_development: (prevScores.software_development || 0) + 20,
                  cyber_security: (prevScores.cyber_security || 0) + 20
                }));
              } else if (marks === 3) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  mobile_development: (prevScores.mobile_development || 0) + 15,
                  threeD_Design: (prevScores.threeD_Design || 0) + 15
                }));
              } else if (marks <= 2) {
                setTrackScores(prevScores => ({
                  ...prevScores,
                  product_design: (prevScores.product_design || 0) + 10,
                  product_management: (prevScores.product_management || 0) + 10
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
     console.log(sections)  

  return (
    <>

        {finalScores === null ? (
            <div className="quiz-box">
                <header>
                    <h1>{sections[currentSection].title}</h1>
                    <h3>Section {currentSection + 1} of {sections.length}</h3>
                </header>
                
                <div className="question-answers">
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
                                            <FaCircleCheck style={{ width: '44px', height: '44px', color:'#5F0C74' }} />
                                            : 
                                            <FaRegCircle  style={{ width: '44px', height: '44px', color:'#5F0C74' }}/>
                                        }
                                    </div>
                                
                                    <p>
                                        {answerText}
                                        
                                    </p>
                                    
                                    
                                </li>
                            )})}
                        </ul>
                    </div>
                    
                    {/* <Button variant="primary" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                        Next
                    </Button> */}
                    <Button variant="primary" onClick={handleNextQuestion}>
                        {currentQuestion < sections[currentSection].questions.length - 1
                        ? "Next"
                        : currentSection < sections.length - 1
                        ? "Next Section"
                        : "Finish"}
                    </Button>

                    
                    
                </div>
            </div>
        ) : (
            <div>
            <h2>Final Scores</h2>
            <ul>
                {Object.entries(finalScores).map(([track, score]) => (
                <li key={track}>{track}: {score}</li>
                ))}
            </ul>
            </div>
            
        )}
      

                
                
    
            
    </>
  )
}

export default Quiz
