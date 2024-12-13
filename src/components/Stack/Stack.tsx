import './stack.scss'
import StackCard from './StackCard/StackCard'
import ts_image from '../../assets/Stack/ts.png'
import js_image from '../../assets/Stack/js.png'
import react_image from '../../assets/Stack/react.png'
import node_image from '../../assets/Stack/node.png'
import scss_image from '../../assets/Stack/saas.png'
import tailwind_image from '../../assets/Stack/tailwind.png'
import html_image from '../../assets/Stack/html.webp'
import css_image from '../../assets/Stack/css.webp'

function Stack() {
  return (
    <div className="stack wrapper">
        <div className="stack__container container">
            <h1 className="stack__title title">My Skills</h1>
            <p className="stack__subtitle">Commitment to staying updated with the latest front-end trends and techniques</p>
            
            <div className="stack__card-container">
              {/* Programming Languages */}
              <StackCard icon={ts_image} name="TypeScript" description="Programming Language" link="https://www.typescriptlang.org/" />
              <StackCard icon={js_image} name="JavaScript" description="Programming Language" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
              
              {/* Frameworks and Runtime */}
              <StackCard icon={react_image} name="React" description="Frontend Library" link="https://react.dev/" />
              <StackCard icon={node_image} name="Node.js" description="Runtime Environment" link="https://nodejs.org/en" />
              
              {/* Markup and Styling */}
              <StackCard icon={html_image} name="HTML" description="Markup Language" link="https://developer.mozilla.org/en-US/docs/Web/HTML" />
              <StackCard icon={css_image} name="CSS" description="Style Sheet Language" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
              <StackCard icon={scss_image} name="SCSS" description="CSS Preprocessor" link="https://sass-lang.com/" />
              <StackCard icon={tailwind_image} name="Tailwind CSS" description="Utility-First CSS Framework" link="https://tailwindcss.com/" />
            </div>

            
        </div>
    </div>
  )
}

export default Stack