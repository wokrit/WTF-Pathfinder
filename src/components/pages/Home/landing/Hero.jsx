import React from 'react'
import Button from '../../../layout/Button'
import { useNavigate } from "react-router-dom"
import hero from './Hero.module.css'



export default function Hero() {
  const navigate = useNavigate()

    const handleSignup = () => {
        navigate("/Signup");
    }

  return (
    <div className={hero.container}>
        <div className={hero.hero}>
        <div className={hero.cta}>
          <h1>Unlock Your Future with <span className={hero.purple}>Path-Finder</span>!</h1>

          <p className={hero.desc}>Find Your Perfect Tech Career Match Through Psychometric Evaluation</p>

          <Button type="button" variant="primary" onClick={handleSignup}>
            Take Assesment
          </Button>
        </div>
        <img src="..\src\assets\Hero Slide Accordion.png" className={hero.pic}></img>
      </div>
      
      <div className={hero.metric}>
        <div className={hero.detail}>
            <h3>18.0%</h3>
           <p>User Satisfaction Rate</p>
        </div>

        <div className={hero.divide}></div>

        <div className={hero.detail}>
            <h3>10 +</h3>
           <p>Countries Reached</p>
        </div>

        <div className={hero.divide}></div>

        <div className={hero.detail}>
            <h3>2 M+</h3>
           <p>Assessments  Taken</p>
        </div>

        <div className={hero.divide}></div>
    
        <div className={hero.detail}>
          <h3>Millions</h3>
          <p>Of Users Worldwide</p>
        </div>
      </div>
    </div>
  )
}

