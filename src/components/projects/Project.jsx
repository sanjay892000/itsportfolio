import React from 'react'
import './project.css'
import allProject from './projects.json'
import ProjectCard from './projectcard/ProjectCard'
function Project() {
    return (
        <section id='project-section'>
            <div className="project-title">
                <h1>my <span>Projects</span></h1>
                <h2 className='allproject'>Projects</h2>
            </div>
            <div className="project-container">
                {allProject.map((project, i) => {
                    return (
                        <ProjectCard key={i} id={project.id} image={project.image} name={project.category_name} description={project.description} />
                    )
                })}
            </div>
        </section>
    )
}

export default Project
