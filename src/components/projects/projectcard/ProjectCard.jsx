import React from 'react'
import './projectcard.css'
import { Link } from 'react-router-dom'
function ProjectCard(props) {
  const {id, image, name, description} = props;
  return (
    <Link to={`/project/${id}`} className="project-card">
      <div className="project-image">
        <img src={image} alt="loading..." />
      </div>
      <div className="project-info">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
