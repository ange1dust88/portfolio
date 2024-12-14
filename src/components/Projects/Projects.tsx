import './projects.scss'
import Project from './Project/Project'
import catBreed from '../../assets/Projects/CatBreed.png'
function Projects() {
  return (
    <div className="projects wrapper">
        <div className="projects__container container">
            <h1 className="projects__title title">My Projects</h1>
            <div className="projects__container-container">
              <Project id = {1} image = {catBreed} title = 'CatBreed' subtitle = 'The CatBreed Identifier is a full-stack app using a Python model for cat breed classification, with a React frontend for easy image uploads and predictions.' link = 'xyz.com' />
              <Project id = {1} image = {catBreed} title = 'CatBreed' subtitle = 'The CatBreed Identifier is a full-stack app using a Python model for cat breed classification, with a React frontend for easy image uploads and predictions.' link = 'xyz.com' />
              <Project id = {1} image = {catBreed} title = 'CatBreed' subtitle = 'The CatBreed Identifier is a full-stack app using a Python model for cat breed classification, with a React frontend for easy image uploads and predictions.' link = 'xyz.com' />
              <Project id = {1} image = {catBreed} title = 'CatBreed' subtitle = 'The CatBreed Identifier is a full-stack app using a Python model for cat breed classification, with a React frontend for easy image uploads and predictions.' link = 'xyz.com' />
              <Project id = {1} image = {catBreed} title = 'CatBreed' subtitle = 'The CatBreed Identifier is a full-stack app using a Python model for cat breed classification, with a React frontend for easy image uploads and predictions.' link = 'xyz.com' />
            </div>
            
        </div>  
    </div>
  )
}

export default Projects