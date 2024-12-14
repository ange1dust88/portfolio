import './experience.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchoolFlag, faBriefcase } from '@fortawesome/free-solid-svg-icons';
function Experience() {
  return (
    <div className="experience wrapper">
      <div className="experience__container container">
        <h1 className="experience__title title">My experience</h1>
        <div className="experience__list">
            <div className="experience__item">
              <h3 className="experience__item-date">2020-2025</h3>
              <FontAwesomeIcon icon={faSchoolFlag} className='experience__item-icon'/>
              <div className="experience__item-content">
                <h1 className="experience__item-job">Student</h1>
                <h2 className="experience__item-company">PSK</h2>
                <p className="experience__item-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Illo aliquam inventore nulla labore ut natus adipisci accusantium facilis soluta, quibusdam,
                   et incidunt repudiandae. Laudantium cum corporis saepe voluptas ducimus vitae!
                </p>
              </div>
            </div>

            <div className="experience__item">
              <h3 className="experience__item-date">2024</h3>
              <FontAwesomeIcon icon={faBriefcase} className='experience__item-icon'/>
              <div className="experience__item-content">
                <h1 className="experience__item-job">Trainee</h1>
                <h2 className="experience__item-company">INFORMATYK</h2>
                <p className="experience__item-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Assumenda aspernatur facere excepturi deserunt eum esse inventore delectus dolore et a fugiat, 
                  rerum aliquid quaerat nostrum ad sint voluptatem expedita ipsum?
                </p>
              </div>
            </div>

            <div className="experience__item">
              <h3 className="experience__item-date">2024-current</h3>
              <FontAwesomeIcon icon={faBriefcase} className='experience__item-icon'/>
              <div className="experience__item-content">
                <h1 className="experience__item-job">Freelance</h1>
                <h2 className="experience__item-company">PSK</h2>
                <p className="experience__item-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quisquam voluptate
                  facere commodi molestias vitae esse beatae quibusdam magnam, perspiciatis totam, culpa, cupiditate sapiente. 
                  Aspernatur suscipit voluptatibus deserunt officiis sed?
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience