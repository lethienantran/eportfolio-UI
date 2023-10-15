import React from 'react'

import './ProjectList.css'
import ProjectCard from '../../Cards/ProjectCard/ProjectCard';


function ProjectList(props) {
  const className = `${props.className} ProjectList-Container`;
  return (
    <div className={className}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

export default ProjectList