import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const Projects = ({ projectData }) => {
  // if (loading) {
  //   return <h2>Loading...</h2>
  // }
  return (
    <div className="row gy-4">
      {projectData?.map((project) => (
        <div
          className="card card-wrapper col-12 col-xl-3 col-lg-4 col-md-4 col-sm-12"
          style={{ backgroundColor: 'transparent' }}
        >
          <div className="card-img-wrapper">
            <Link to={`/project/${project?.id}`}>
              <img
                src={project?.project_img}
                className="card-img-top h-100 w-100"
                alt="..."
              />
            </Link>
          </div>

          <div className="card-body-wrapper my-4">
            <h5 className="card-title">{project?.project_name}</h5>
            <p className="card-text">
              {project?.project_description.length > 100
                ? `${project?.project_description.substring(0, 100)} ...`
                : project?.project_description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Projects
