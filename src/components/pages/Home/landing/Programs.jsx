import React from 'react'
import Button from '../../../layout/Button'
import programs from './Programs.module.css'

export default function Programs() {
    const handleProgram = () => {
    window.location.href = 'https://www.womentechsters.org/programs';
  };

  return (
    <div className={programs.container}>
        <div className={programs.box}>
            <div className={programs.feature}>
                <h3>
                    OUR PROGRAMS 
                </h3>
                <p className={programs.text}>
                    Success in the tech industry is about continuous growth and development. Women Techsters Fellowship goes beyond initial career recommendations provided through Women Techsters Pathfinder but also provide ongoing programs to help women thrive in their chosen path. From booth camps to masterclasses, we empower you to stay ahead in a rapidly evolving tech landscape and achieve long-term career success.
                </p>

                <p className={programs.textmobile}>
                    Success in the tech industry is about continuous growth and development. Women Techsters Fellowship goes beyond initial career recommendations provided through Women Techsters Pathfinder.
                </p>
            </div>

            <Button type="button" variant="secondary" onClick={handleProgram}>
                EXPLORE PROGRAMS
          </Button>
        </div>
    </div>
  )
}
