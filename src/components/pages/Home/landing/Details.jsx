import React from 'react'
import details from './Details.module.css'
import Button from '../../../layout/Button'
import { useNavigate } from "react-router-dom"

export default function Details() {
    const navigate = useNavigate()

    const handleSignup = () => {
        navigate("/Signup");
    }

  return (
    <div className={details.container}>
        <section className={details.article}>
            <img src="\images\purplegirl.png" className={details.girl}/>
            <div className={details.one}>
                <h3 className={details.heading}>
                    Personalised Career Recommendation
                </h3>
                <p className={details.desc}>Women Techsters Pathfinder psychometric assessments delve deep into your psychological attributes, cognitive abilities, personality traits, aptitudes, and skills. Whether you're inclined towards software development, data science, cybersecurity, or UX design, our platform helps you discover the perfect fit.</p>
            </div>
        </section>

        <section className={details.articles}>
            <div className={details.two}>
                <h3 className={details.heading}>
                    Clarity and Direction
                </h3>
                <p className={details.desc}>Pathfinder offers clarity and direction by highlighting areas where you excel. Whether you're a recent graduate exploring entry-level positions or a seasoned professional considering a career switch, our platform equips you with the insights needed to make confident decisions about your tech career trajectory.</p>
            </div>

            <img src="\images\pinkgirl.png" className={details.girl} />
        </section>

        <section className={details.art}>
            <div className={details.one}>
                <img src="\images\pinkgirl.png" className={details.girl} />
                <h3 className={details.heading}>
                    Clarity and Direction
                </h3>
                <p className={details.desc}>Women Techsters Pathfinder offers clarity and direction by highlighting areas where you excel. Whether you're a recent graduate exploring entry-level positions or a seasoned professional considering a career switch, our platform equips you with the insights needed to make confident decisions about your tech career trajectory.</p>
            </div>
        </section>

        <section className={details.ctatwo}>
            <p>Get a tailored career recommendations that align with your strengths and aspirations in the Tech Industry.</p>

            <Button type="button" variant="primary" onClick={handleSignup}>
            Take Assesment
          </Button>
        </section>
    </div>
  )
}
