import React from 'react'

import './ProjectCard.css'

import Project_PlaceHolder from '../../../Assets/Images/Project_TheOuterBase.png';

function ProjectCard(props) {
  const className = `${props.className} ProjectCard-Container`;
  return (
    <div className={className}>
        <img src={Project_PlaceHolder} alt='Project Banner' className='ProjectCard-Banner'/>
    </div>
  )
}

export default ProjectCard