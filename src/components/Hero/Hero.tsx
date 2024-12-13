import './hero.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (

    <div className='hero wrapper'>
      <div className="hero__container container">
          <div className="hero__upper">
              <h1 className="hero__upper-title">WEB APPLICATIONS</h1>
              <h1 className="hero__upper-title">DEVELOPER</h1>
          </div>
          <div className="hero__lower">
              <div className="hero__lower-socials">
                  <p className="hero__lower-text">Say hello</p>
                  <FontAwesomeIcon icon={faGithub} className='icon'/>
                  <FontAwesomeIcon icon={faTelegram} className='icon'/>
              </div>
              <p className="hero__lower-subtitle">
                Hello there, I’m Lev Zubenko –
                I craft modern, responsive websites and web applications 
                that are functional, visually appealing, 
                and tailored to your needs. 
                With a passion for clean code and creative design, I bring your ideas to life online.
              </p>
              <div className="hero__lower-contact">
                <button className='hero__lower-button'>Contact Me</button>
              </div>
          </div>
      </div>

    </div>
  )
}

export default Hero