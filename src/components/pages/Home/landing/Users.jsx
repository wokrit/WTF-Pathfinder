import React from 'react'
import users from './Users.module.css'

export default function Users() {
  return (
    <div className={users.container}>
        <h2 className={users.heading}>What Our Users Say</h2>

        <section className={users.wrapper}>
            <article>
                <div className={users.profile}>
                    <img src="..\src\assets\eleanor.png" className={users.pfp} />
                    <span>Eleanor Pena</span>
                </div>

                <p className={users.bubble}>
                    I was uncertain about my career direction in tech until I discovered Pathfinder. The personalized recommendations guided me towards a path that perfectly aligns with my skills and interests.
                </p>
            </article>

            <article>
                <div className={users.profile}>
                    <img src="..\src\assets\jerome.png" className={users.pfp} />
                    <span>Jerome Bell</span>
                </div>

                <p className={users.bubble}>
                    Finding my tech career path felt like navigating a maze until I discovered Pathfinder. Their personalized recommendations illuminated the way forward, aligning my skills with the right opportunities.
                </p>
            </article>

            <article>
                <div className={users.profile}>

                    <img src="..\src\assets\ronald.png" className={users.pfp} />
                    <span>Ronald Richard</span>

                </div>

                <p className={users.bubble}>
                    Pathfinder revolutionized my career trajectory in the tech world. Its customized guidance not only helped me identify my strengths but also steered me towards a career path that resonates deeply with my professional aspirations and objectives.                </p>
            </article>

            <article>
                <div className={users.profile}>

                    <img src="..\src\assets\dianne.png" className={users.pfp} />
                    <span>Dianne Russell</span>

                </div>

                <p className={users.bubble}>
                    I cannot recommend Pathfinder enough! Its intuitive platform and expert insights made me feel confident throughout my career exploration journey. Thanks to Pathfinder, I'm now on a fulfilling trajectory in tech
                </p>
            </article>
        </section>


    </div>
  )
}
