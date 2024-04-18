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
                    <img src="..\src\assets\eleanor.png" className={users.pfp} />
                    <span>Eleanor Pena</span>
                </div>

                <p className={users.bubble}>
                    I was uncertain about my career direction in tech until I discovered Pathfinder. The personalized recommendations guided me towards a path that perfectly aligns with my skills and interests.
                </p>
            </article>

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
                    <img src="..\src\assets\eleanor.png" className={users.pfp} />
                    <span>Eleanor Pena</span>
                </div>

                <p className={users.bubble}>
                    I was uncertain about my career direction in tech until I discovered Pathfinder. The personalized recommendations guided me towards a path that perfectly aligns with my skills and interests.
                </p>
            </article>
        </section>


    </div>
  )
}
