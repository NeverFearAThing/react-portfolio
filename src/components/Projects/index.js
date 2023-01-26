import { useEffect, useState } from 'react'
import { faFontAwesome, faReact } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faChartColumn,
  faTriangleCircleSquare,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons'
import data from '../../Data/projects.json'
import Pagination from './Components/Pagination'
import Projects from './Components/Projects'
const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [projectstates, setProjectStates] = useState({
    projects: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 8,
  })
  const { currentPage, postsPerPage, projects, loading } = projectstates
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentProjects = projects.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNum) =>
    setProjectStates({ ...projectstates, currentPage: pageNum })

  const nextPage = () =>
    setProjectStates({ ...projectstates, currentPage: currentPage + 1 })

  const prevPage = () =>
    setProjectStates({ ...projectstates, currentPage: currentPage - 1 })
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  useEffect(() => {
    setProjectStates({ ...projectstates, projects: data })
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="project-page-content">
          <div className="project-page-title text-center">
            <p className="project-page-title-content">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'A',
                  'l',
                  'l',
                  ' ',
                  'P',
                  'r',
                  'o',
                  'j',
                  'e',
                  'c',
                  't',
                ]}
                idx={15}
              />
              {/* All Projects */}
            </p>
          </div>
          <div className="project-info text-center">
            <p className="project-info-content">
              Click Project Picture to learn more about the project
            </p>
          </div>
          <div className="projects-wrapper mt-5">
            <Projects projectData={currentProjects} />
          </div>
          <div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={projects.length}
              paginate={paginate}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
