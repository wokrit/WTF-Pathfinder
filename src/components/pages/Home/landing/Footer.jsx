import React from 'react'
import footer from './Footer.module.css'

export default function Footer() {
  return (
    <div className={footer.container}>
        <section className={footer.top}>
          <img src="\images\WT-LOGO-1 1.png" className={footer.logo} />
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
                <img src="..\src\assets\fb.png" className={footer.social}/>
              </a>

              <a href="https://web.facebook.com/Tech4DevHQ/?_rdc=1&_rdr" target='_blank'>
                <img src="..\src\assets\twitter.png" className={footer.social}/>
              </a>

              <a href="https://web.facebook.com/Tech4DevHQ/?_rdc=1&_rdr" target='_blank'>
                <img src="..\src\assets\linkedin.png" className={footer.socials}/>
              </a>

              <a href="https://web.facebook.com/Tech4DevHQ/?_rdc=1&_rdr" target='_blank'>
                <img src="..\src\assets\ig.png" className={footer.social} />
              </a>
            </li>
          </ul>
        </section>

        <div className={footer.line}></div>

        <section className={footer.copyright}>
          <p>
            <small>©</small> Women Techsters @2024. All rights reserved
          </p>
          <p><a href="">Privacy Policy</a></p>
        </section>
    </div>
  )
}
