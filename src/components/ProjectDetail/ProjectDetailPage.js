import React from 'react'
import './index.scss'
import Project from '../../Data/projects.json'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const ProjectDetail = () => {
  const [projectData, setProjectData] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const data = Project.filter((item) => item.id === Number(id))
    setProjectData(data[0])
  }, [])

  //   if (projectData?.length === 0) {
  //     return <h2>Loading....</h2>
  //   }
  return (
    <>
      <div className="container project-detail-page">
        <div className="project-detail-page-content">
          <div className="project-detail-page-title text-center my-5">
            <p className="project-detail-page-title-content">
              {projectData?.project_name}
            </p>
          </div>
          <div className="row project-detail-info mt-3">
            {projectData.project_img !== '' && (
              <div className="col-12 col-xl-8 col-xl-8 col-xl-8 col-sm-12 project-img">
                <img
                  className="w-100"
                  src={projectData?.project_img}
                  alt=""
                  srcset=""
                />
              </div>
            )}
            <div className="col-12 col-xl-4 col-xl-4 col-xl-4 col-sm-12 project-detail-info-content">
              <p style={{ fontSize: '15px' }}>{projectData?.Collaborators}</p>
              <p className="pd-description" style={{ fontSize: '15px' }}>
                {projectData?.project_description?.length > 600
                  ? `${projectData?.project_description?.substring(0, 600)} ...`
                  : projectData?.project_description}
              </p>
              <p className="pd-skill">{projectData?.skill}</p>
            </div>
            {projectData?.project_video_link !== '' && (
              <div className="pd-video-link text-center my-5">
                <iframe
                  className="h-100 pd-video"
                  src={projectData?.project_video_link}
                ></iframe>
              </div>
            )}
            <div className="row long-desc-wrapper w-100 mt-4">
              <div className="col-xl-8">
                <div className="pd-long-description-wrapper m-2">
                  <p className="pd-long-description ">
                    {projectData?.longer_project_desc}
                  </p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="text-center pd-pdf m-2">
                  <p className="pd-pdf-text mb-5">
                    Click Button to See Pdf Report
                  </p>
                  <a
                    href={projectData?.project_report_pdf_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-btn"
                  >
                    PDF Report
                  </a>
                </div>
              </div>
            </div>

            <div className="row pd-image-gallery my-5">
              {projectData?.project_gallery?.map((img) => (
                <div className="col-lg-3 my-2">
                  <img src={img} className="w-100 h-100" alt="" srcset="" />
                </div>
              ))}
            </div>
            <div className="backBtn">
              <button onClick={() => navigate(-1)}>Go back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetail
