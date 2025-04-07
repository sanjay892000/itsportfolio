import React from 'react'
function ProjectDetailsCard(props) {

    const {name, description, image, livelink} = props;
    return (
        <div className="subproject-card">
            <div className="subproject-image">
                <img src={image} alt="loading..." />
                <div className='previewbtn'><a href={livelink} target='_blank'>Preview</a></div>
            </div>
            <div className="subproject-info">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectDetailsCard
