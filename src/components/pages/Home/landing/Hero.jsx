import React from 'react'
import Button from '../../../layout/Button'
import { useNavigate } from "react-router-dom"
import hero from './Hero.module.css'
import Automation from "./Automation"
import MobileAnimation from './MobileAnimation'
import CountUp from 'react-countup'



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

        {/* <img src="\images\Hero Slide Accordion.png" className={hero.pic}></img> */}

        <div className={hero.pic}><Automation> </Automation></div>
      </div>

      {/* <div className={hero.mobile}>
        <MobileAnimation></MobileAnimation>
      </div> */}
      
      <div className={hero.metric}>
        <div className={hero.detail}>
            <h3><CountUp start={18} end={100} duration ={2.75} />%</h3>
           <p>User Satisfaction Rate</p>
        </div>

        <div className={hero.divide}></div>

        <div className={hero.detail}>
            <h3><CountUp start={10} end={120} duration ={2.75} />+</h3>
           <p>Countries Reached</p>
        </div>

        <div className={hero.divide}></div>

        <div className={hero.detail}>
            <h3><CountUp start={2} end={10} duration ={2.75} />M+</h3>
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

