import React, { useEffect, useState } from 'react'
import './projectdetails.css'
import { useParams } from 'react-router-dom';
import allProject from '../projects.json'
import ProjectDetailsCard from './ProjectDetailsCard';
function ProjectDetails() {
  const [projectName, setProjectName] = useState('my')
  const { id } = useParams()

  useEffect(() => {
    let mypro;
    allProject.forEach((value) => {
      if (value.id === parseInt(id)) {
        mypro = value.category_name
      }
    })
    setProjectName(mypro)
  }, [projectName])

  return (
    <section id='project-section'>
      <div className="project-title">
        <h1> {projectName} <span>Projects</span></h1>
        <h2 className='allproject'>Projects</h2>
      </div>
      <div className="project-container">
        {allProject.map((project, i) => {
          if (project.id === parseInt(id)) {
            return (
              <>
                {project.project.map((element, i) => {
                  return (
                    <ProjectDetailsCard key={i} name={element.name} description={element.description} image={element.image} livelink={element.live_link}/>
                  )
                })}
              </>
            )
          }
        })}
      </div>
    </section>
  )
}

export default ProjectDetails


/* 
else{
  return(
    <section>
      <h1>Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href='/project'>Go Back</a>
    </section>
  )
} */