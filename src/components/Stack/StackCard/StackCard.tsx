import './stackcard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface StackCardProps {
  icon?: string;
  name: string;
  description?: string;
  link: string;
}

const StackCard: React.FC<StackCardProps> = ({ icon, name, description, link }) => {
  return (
    <a href={link} className='stack__link'> 
    <div className="stack__card">
      <div className="stack__card-left">
        {icon && (
          <div className="stack__card-icon">
            <img src={icon} alt="Stack Card Icon" className="stack__card-icon--image" />
          </div>
        )}
        <div className="stack__card-text">
          <h3 className="stack__card-name">{name}</h3>
          <p className="stack__card-description">{description}</p>
        </div>
      </div>
      <div className="stack__card-arrow--container">
        <FontAwesomeIcon icon={faArrowRight}  className="stack__card-arrow" /> 
      </div>
    </div>
    </a>
  );
};

export default StackCard;
