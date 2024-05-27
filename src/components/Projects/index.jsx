import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>ReactJs</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>ReactJs</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>Javascript</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>Javascript</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>React-Redux</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>React-Redux</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project, i) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={i}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project,i) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={i}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects