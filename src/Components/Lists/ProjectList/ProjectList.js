import React from 'react'

import './ProjectList.css'
import ProjectCard from '../../Cards/ProjectCard/ProjectCard';
import { useNavigate } from 'react-router-dom';


function ProjectList(props) {
  const className = `${props.className} ProjectList-Container`;

  const navigate = useNavigate();

  const OnNavigateProject = () => {
    navigate('/Project');
  }

  return (
    <div className={className}>
        <ProjectCard onClick={OnNavigateProject}/>
        <ProjectCard onClick={OnNavigateProject}/>
        <ProjectCard onClick={OnNavigateProject}/>
        <ProjectCard onClick={OnNavigateProject}/>
        <ProjectCard onClick={OnNavigateProject}/>
    </div>
  )
}

export default ProjectList