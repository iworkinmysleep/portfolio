import React from 'react'
import Icon1 from '../../images/website.svg'
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './ProjectsElements'

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Some of my work</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1}/>
          <ProjectsH2>Name of the project</ProjectsH2>
          <ProjectsP>Some text about the project</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon1}/>
          <ProjectsH2>Name of the project</ProjectsH2>
          <ProjectsP>Some text about the project</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon1}/>
          <ProjectsH2>Name of the project</ProjectsH2>
          <ProjectsP>Some text about the project</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
