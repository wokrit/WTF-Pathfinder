import React from 'react'
import footer from './Footer.module.css'

export default function Footer() {
  return (
    <div className={footer.container}>
        <section className={footer.top}>
          <img src="\images\logoft.png" className={footer.logo} />
          <ul className={footer.list}>
            <li>Footer Menu</li>
            <li>Programs</li>
            <li>Tech Careers</li>
            <li>Contact</li>
          </ul>

          <ul className={footer.list}>
            <li>(+234) 904 329 8729</li>
            <li><a href="mailto:Email@Wtfellowship@tech4dev.com">Email@Wtfellowship@tech4dev.com</a></li>
            <li className={footer.sm}>
              <a href="https://web.facebook.com/Tech4DevHQ/?_rdc=1&_rdr" target='_blank'>
                <img src="\images\fb.png" className={footer.social}/>
              </a>

              <a href="https://web.facebook.com/Tech4DevHQ/?_rdc=1&_rdr" target='_blank'>
                <img src="\images\twitter.png" className={footer.social}/>
              </a>

              <a href="https://web.facebook.com/Tech4DevHQ/?_rdc=1&_rdr" target='_blank'>
                <img src="\images\linkedin.png" className={footer.socials}/>
              </a>

              <a href="https://web.facebook.com/Tech4DevHQ/?_rdc=1&_rdr" target='_blank'>
                <img src="\images\ig.png" className={footer.social} />
              </a>
            </li>
          </ul>
        </section>

        <div className={footer.line}></div>

        <section className={footer.copyright}>
          <p>
            <small>©</small> Pathfinder @2024. All rights reserved
          </p>

          <p className={footer.initiative}><span>An intiative of</span> <img src='\images\tech4dev.png' className={footer.tech} /> </p>

          <p><a href="">Privacy Policy</a></p>
        </section>
    </div>
  )
}
