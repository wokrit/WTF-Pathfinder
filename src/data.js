const data = {
    sections : [
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
      
            
    ]
}


export default data