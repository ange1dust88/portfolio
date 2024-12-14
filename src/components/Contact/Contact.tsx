import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className='contact wrapper'>
        <div className="contact__container container">
            <h1 className="contact__title">Thank You!</h1>
            <p className="contact__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque, sit cumque dolores aliquam exercitationem aliquid cum voluptate, illum ratione eaque mollitia laudantium! Cumque fugit ab consequatur adipisci suscipit nesciunt!</p>
            <div className="contact__links">
                <div className="contact__link">
                    <a href="">
                    <FontAwesomeIcon icon={faGithub} className='contact__link-icon'/>
                    ange1dust88
                    </a>
                </div>
                <div className="contact__link">
                    <a href="">
                    <FontAwesomeIcon icon={faTelegram} className='contact__link-icon'/>
                    @upsdwrld
                    </a>
                </div>
                <div className="contact__link">
                    <a href="">
                    <FontAwesomeIcon icon={faEnvelope} className='contact__link-icon'/>
                    zubbenkolev@gmail.com
                    </a>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Contact