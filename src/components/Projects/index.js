import { useEffect, useState } from 'react'
import {
  faFontAwesome,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faChartColumn, faTriangleCircleSquare, faUserCheck } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
      return setLetterClass('text-animate-hover')
      }, 4000)
  }, [])


    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I'm a young designer, with an exciting outlook on the future. Technology is evolving at a incredible speed, and we can only fully benefit from this if we properly apply it.
            </p>
            <p align="LEFT">
              I'm a studious, hard working, motivated designer who excells in teams with different backgrounds and thus different state of minds. 
            </p>
            <p>
              If asked to explain who I am in one sentence I would say that I am adventurous, a good listener, sports enthousiast, and last but not least a tech-fanatic!
             
            </p>
          </div>
          <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <FontAwesomeIcon icon={faUserCheck} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faChartColumn} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faTriangleCircleSquare} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faFontAwesome} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#EC4D28" />
            </div>
          </div>
        </div>
      


        </div>

      </>
    )
  }
  
  export default About
