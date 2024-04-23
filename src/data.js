const data = {
    sections : [
        {
            title: "Mathematical Aptitude",
            questions: [
                {
                    question: "What is the next number in the sequence: 10, 12, 14, 16 ___?",
                    answers: [
                      {
                          answerID : 'A', 
                          answerText: '20', 
                          correct: false
                      },
                      {
                          answerID : 'B', 
                          answerText: '18', 
                          correct: true
                      },
                      {
                          answerID : 'C', 
                          answerText: '24', 
                          correct: false
                      },
                      {
                          answerID : 'D', 
                          answerText: '26', 
                          correct: false
                      }
                    ],
                    
                },
          
                {
                    question: "What is the next number in the sequence: 5, 25, 125, ___",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: '225', 
                            correct: false
                        },
                        {
                            answerID : 'B', 
                            answerText: '625', 
                            correct: true
                        },
                        {
                            answerID : 'C', 
                            answerText: '130', 
                            correct: false
                        },
                        {
                            answerID : 'D', 
                            answerText: '125', 
                            correct: false
                        }
                    ]
                },
                {
                    question: "What is the formula to calculate the mean (average) of a set of numbers? ",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: 'Mean = Sum of numbers / Count of numbers', 
                            correct: true
                        },
                        {
                            answerID : 'B', 
                            answerText: ' Mean = Count of numbers / Sum of numbers', 
                            correct: false
                        },
                        {
                            answerID : 'C', 
                            answerText: 'Mean = Sum of numbers * Count of numbers ', 
                            correct: false
                        },
                        {
                            answerID : 'D', 
                            answerText: 'Mean = Count of numbers - Sum of numbers ', 
                            correct: false
                        }
                    ]
                }
                // {
                //     question: "If x=5 and y=3, what is the value of x2 + y2?",
                //     answers: [
                //         {
                //             answerID : 'A', 
                //             answerText: '25', 
                //             correct: true
                //         },
                //         {
                //             answerID : 'B', 
                //             answerText: '28', 
                //             correct: false
                //         },
                //         {
                //             answerID : 'C', 
                //             answerText: '34', 
                //             correct: false
                //         },
                //         {
                //             answerID : 'D', 
                //             answerText: '30', 
                //             correct: false
                //         }
                //     ]
                // },
                // {
                //     question: "If A = 1, B = 2, C = 3, and so on, what is the value of the word 'TECH'?",
                //     answers: [
                //         {
                //             answerID : 'A', 
                //             answerText: '20', 
                //             correct: false
                //         },
                //         {
                //             answerID : 'B', 
                //             answerText: '36', 
                //             correct: true
                //         },
                //         {
                //             answerID : 'C', 
                //             answerText: '26', 
                //             correct: false
                //         },
                //         {
                //             answerID : 'D', 
                //             answerText: '6', 
                //             correct: false
                //         }
                //     ]
                // }
                
            ]
        },
        {
            title: "Logical Reasoning",
            questions: [
                {
                    question: "If all cats have tails, and Fluffy is a cat, what can you conclude?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: 'Fluffy has a tail', 
                            correct: true
                        },
                        {
                            answerID : 'B', 
                            answerText: 'Fluffy does not have a tail', 
                            correct: false
                        },
                        {
                            answerID : 'C', 
                            answerText: 'Some cats have tails', 
                            correct: false
                        },
                        {
                            answerID : 'D', 
                            answerText: 'No conclusion can be drawn', 
                            correct: false
                        }
                    ]
                },
                {
                    question: "If today is Tuesday and 10 days from now will be Friday, what day of the week was it 5 days ago?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: 'Monday', 
                            correct: false
                        },
                        {
                            answerID : 'B', 
                            answerText: 'Tuesday', 
                            correct: true
                        },
                        {
                            answerID : 'C', 
                            answerText: 'Wednesday', 
                            correct: false
                        },
                        {
                            answerID : 'D', 
                            answerText: 'Thursday', 
                            correct: false
                        }
                    ]
                },
                {
                    question: "If all Zivens are Gralls and some Gralls are Pindos, what can be inferred about Zivens and Pindos?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: 'All Zivens are Pindos', 
                            correct: false
                        },
                        {
                            answerID : 'B', 
                            answerText: 'Some Zivens may be Pindos, but not all Zivens are necessarily Pindos', 
                            correct: true
                        },
                        {
                            answerID : 'C', 
                            answerText: 'None of the above', 
                            correct: false
                        },
                        {
                            answerID : 'D', 
                            answerText: 'All of the above ', 
                            correct: false
                        }
                    ]
                }
                // {
                //     question: "All trees have branches. If this is true, what can you say about a particular tree with branches? ",
                //     answers: [
                //         {
                //             answerID : 'A', 
                //             answerText: ' It is definitely a tree', 
                //             correct: true
                //         },
                //         {
                //             answerID : 'B', 
                //             answerText: 'It may or may not be a tree', 
                //             correct: false
                //         },
                //         {
                //             answerID : 'C', 
                //             answerText: 'It cannot be a tree', 
                //             correct: false
                //         },
                //         {
                //             answerID : 'D', 
                //             answerText: 'No conclusion can be drawn ', 
                //             correct: false
                //         }
                //     ]
                // },
                // {
                //     question: "If some students are tall, and all tall people play basketball, what can you conclude about some students?",
                //     answers: [
                //         {
                //             answerID : 'A', 
                //             answerText: 'Some students play basketball', 
                //             correct: true
                //         },
                //         {
                //             answerID : 'B', 
                //             answerText: 'All students play basketball', 
                //             correct: false
                //         },
                //         {
                //             answerID : 'C', 
                //             answerText: 'No students play basketball', 
                //             correct: false
                //         },
                //         {
                //             answerID : 'D', 
                //             answerText: 'Some students are not tall', 
                //             correct: false
                //         }
                //     ]
                // }
            ]
        },
        {
            title: "Personality Traits",
            questions: [
                {
                    question: "I am very comfortable with unconventional ideas or ways of thinking?",
                    answers: [
                      {
                          answerID : 'A', 
                          answerText: 'Stongly Agree', 
                          scores: {Product_Design: 10, Mobile_Development: 10, ThreeD_Animation: 10 }
                      },
                      {
                          answerID : 'B', 
                          answerText: 'Agree', 
                          scores: { Product_Design: 10, Mobile_Development: 10, ThreeD_Animation: 10}
                      },
                      {
                          answerID : 'C', 
                          answerText: 'Neutral', 
                          scores: { Cyber_Security: 10, Data_Analysis: 10, Blockchain_Development: 10, Software_Development: 10, Product_Management: 10  }
                      },
                      {
                          answerID : 'D', 
                          answerText: 'Disagree', 
                          scores: { }
                      },
                      {
                          answerID : 'E', 
                          answerText: 'Strongly Disagree', 
                          scores: { }
                      }
                    ],
                    
                },
          
                {
                    question: "I am organized and prefer structured environments ?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: 'Strongly Agree', 
                            scores: { Product_Management: 10, Data_Analysis: 10, Software_Development:10, Cyber_Security: 10 }
                        },
                        {
                            answerID : 'B', 
                            answerText: 'Agree', 
                            scores: { Product_Management: 10, Data_Analysis: 10, Software_Development:10, Cyber_Security: 10}
                        },
                        {
                            answerID : 'C', 
                            answerText: 'Neutral', 
                            scores: { Product_Design: 10, Mobile_Development: 10}
                        },
                        {
                            answerID : 'D', 
                            answerText: 'Disagree', 
                            scores: { Product_Design: 10, Mobile_Development: 10}
                        },
                        {
                            answerID : 'E', 
                            answerText: 'Strongly Disagree', 
                            scores: { ThreeD_Animation: 10, Blockchain_Development: 10}
                        }
                    ]
                },
                {
                    question: "How do you typically react to unexpected changes in a project?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: 'Remain calm and focused, finding effective solutions', 
                            scores: { Product_Management: 10, Data_Analysis: 10, Software_Development:10, Cyber_Security: 10 }
                        },
                        {
                            answerID : 'B', 
                            answerText: 'Stay composed but may feel the pressure ', 
                            scores: { Product_Design: 10, Blockchain_Development: 10}
                        },
                        {
                            answerID : 'C', 
                            answerText: 'Sometimes feel overwhelmed, but manage to cope', 
                            scores: { ThreeD_Animation: 10, Mobile_Development: 10}
                        },
                        {
                            answerID : 'D', 
                            answerText: 'Often feel stressed and struggle to cope ', 
                            scores: { }
                        }
                    ]
                },
                {
                    question: "Do you often assert yourself to ensure your needs are met in relationships or professional settings?",
                    answers: [
                        {
                            answerID : 'A', 
                            answerText: 'Strongly Agree', 
                            scores: { Product_Management: 10, Data_Analysis: 10, Cyber_Security: 10 }
                        },
                        {
                            answerID : 'B', 
                            answerText: 'Agree ', 
                            scores: { Product_Management: 10, Data_Analysis: 10, Cyber_Security: 10}
                        },
                        {
                            answerID : 'C', 
                            answerText: 'Neutral', 
                            scores: { Software_Development: 10}
                        },
                        {
                            answerID : 'D', 
                            answerText: 'Disagree ', 
                            scores: { Product_Design: 10, ThreeD_Animation: 10, Mobile_Development: 10, Blockchain_Development: 10 }
                        },
                        {
                            answerID : 'E', 
                            answerText: ' Strongly Disagree ', 
                            scores: { Product_Design: 10, ThreeD_Animation: 10, Mobile_Development: 10, Blockchain_Development: 10 }
                        }
                    ]
                }
            ]
        },
        {
            title: "Creativity and Innovation",
            questions: [
                {
                    question: "You are leading the development of a new social networking app for professionals. How would you ensure the platform promotes meaningful connections and collaboration?",
                    answers: [
                      {
                          answerID : 'A', 
                          answerText: 'Utilize advanced data analytics to recommend relevant connections and networking opportunities based on user interests and career goals. ', 
                          scores: { Data_Analysis: 10}
                      },
                      {
                          answerID : 'B', 
                          answerText: 'Incorporate interactive 3D avatars and virtual meeting spaces to simulate face-to-face interactions and networking events. ', 
                          scores: {ThreeD_Animation: 10}
                      },
                      {
                          answerID : 'C', 
                          answerText: 'Implement end-to-end encryption and secure messaging features to protect user privacy and confidential conversations', 
                          scores: { Cyber_Security: 10 }
                      },
                      {
                          answerID : 'D', 
                          answerText: 'Design a clean and intuitive user interface with customizable profiles and networking tools to facilitate professional networking.', 
                          scores: { Product_Design: 10 }
                      },
                      {
                          answerID : 'E', 
                          answerText: 'Develop real-time collaboration features such as document sharing and project management tools to facilitate teamwork and productivity', 
                          scores: { Software_Development: 10, Product_Management: 10, Mobile_Development: 10}
                      }
                    ]
                    
                },
                {
                    question: "How would you ensure the effectiveness and engagement of a new e-learning platform with a focus on technical implementation? ",
                    answers: [
                      {
                          answerID : 'A', 
                          answerText: "Implement user feedback loops to iteratively enhance the platform's functionality and user experience", 
                          scores: { Software_Development: 10, Mobile_Development: 10}
                      },
                      {
                          answerID : 'B', 
                          answerText: "Integrate immersive 3D visuals and interactive elements into the e-learning platform's content to enhance engagement and retention", 
                          scores: {ThreeD_Animation: 10}
                      },
                      {
                          answerID : 'C', 
                          answerText: 'Design a visually appealing and user-friendly interface with intuitive navigation to facilitate seamless learning experiences', 
                          scores: { Product_Design: 10 }
                      },
                      {
                          answerID : 'D', 
                          answerText: "Utilize blockchain technology to enhance security, transparency, and trust in the platform's content delivery and assessment processes.",
                          scores: { Blockchain_Development: 10, Cyber_Security: 10 }
                      },
                      {
                          answerID : 'E', 
                          answerText: 'Employ data analytics to track learner progress and preferences, enabling personalized learning experiences and content recommendations.', 
                          scores: { Data_Analysis: 10}
                      }
                    ]
                    
                }
            ]
        },
        {
            title: "Technical Aptitude",
            questions: [
                {
                    question: "How confident are you in troubleshooting hardware and software issues? ",
                    answers: [
                      {
                          answerID : 'A', 
                          answerText: 'Not confident at all', 
                          scores: { Product_Design: 10, ThreeD_Animation: 10, Product_Management: 10}
                      },
                      {
                          answerID : 'B', 
                          answerText: 'Moderately confident', 
                          scores: {Data_Analysis: 10, Blockchain_Development: 10 }
                      },
                      {
                          answerID : 'C', 
                          answerText: 'Highly Confident', 
                          scores: { Cyber_Security: 10, Software_Development: 10, Mobile_Development: 10 }
                      }
                    ]
                    
                } 
                // {
                //     question: "How comfortable are you with systems that help organize and manage data, like storing information in organized collections?",
                //     answers: [
                //         {
                //             answerID : 'A', 
                //             answerText: 'Not comfortable', 
                //             scores: { Product_Design: 5, ThreeD_Animation: 5 }
                //         },
                //         {
                //             answerID : 'B', 
                //             answerText: 'Somewhat comfortable', 
                //             scores: {Cyber_Security: 5, Blockchain_Development: 5, Software_Development: 5, Mobile_Development: 5 }
                //         },
                //         {
                //             answerID : 'C', 
                //             answerText: 'Very comfortable', 
                //             scores: { Data_Analysis: 5 }
                //         }
                //     ]
                    
                // }
            ]
        }
      
            
    ]
}


export default data