import React from 'react'

import './ProjectList.css'
import ProjectCard from '../../Cards/ProjectCard/ProjectCard';


function ProjectList(props) {
  const className = `${props.className} ProjectList-Container`;
  return (
    <div className={className}>
        <ProjectCard onClick={()=>{}}/>
        <ProjectCard onClick={()=>{}}/>
        <ProjectCard onClick={()=>{}}/>
        <ProjectCard onClick={()=>{}}/>
        <ProjectCard onClick={()=>{}}/>
    </div>
  )
}

export default ProjectList