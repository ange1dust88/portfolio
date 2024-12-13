import './project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

interface ProjectProps {
  id: number,
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({id, image, title, subtitle, link }) => {
  return (
    <div className="project">
        <div className="project__image-container">
            <img src={image} alt="" className="project__image" />
            <div className="project__number">#{id}</div>
        </div>
        <h1 className="project__title">{title}</h1>
        <p className="project__subtitle">{subtitle}</p>

        <div className="project__footer">
            <div className="project__footer-icons">
                <a href=""><FontAwesomeIcon icon={faGithub} className='project__footer-icon'/></a>
                <a href=""><FontAwesomeIcon icon={faEye} className='project__footer-icon'/></a>
            </div>
            <p className="project__footer-date">11.11.2023</p>
        </div>
    </div>
  );
};

export default Project;
