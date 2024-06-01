import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'



const Projects = ({openModal, setOpenModal}) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'design' ?
            <ToggleButton active value="design" onClick={() => setToggle('design')}>Design</ToggleButton>
            :
            <ToggleButton value="design" onClick={() => setToggle('design')}>Design</ToggleButton>
          }
          <Divider />
          {toggle === 'reactjs' ?
            <ToggleButton active value="reactjs" onClick={() => setToggle('Design')}>ReactJs</ToggleButton>
            :
            <ToggleButton value="reactjs" onClick={() => setToggle('reactjs')}>ReactJs</ToggleButton>
          }
          <Divider />
          {toggle === 'javascript' ?
            <ToggleButton active value="javascript" onClick={() => setToggle('javascript')}>Javascript</ToggleButton>
            :
            <ToggleButton value="javascript" onClick={() => setToggle('javascript')}>Javascript</ToggleButton>
          }
          <Divider />
          {toggle === 'react-redux' ?
            <ToggleButton active value="react-redux" onClick={() => setToggle('react-redux')}>React-Redux</ToggleButton>
            :
            <ToggleButton value="react-redux" onClick={() => setToggle('react-redux')}>React-Redux</ToggleButton>
          }
           <Divider />
          {toggle === 'upcoming' ?
            <ToggleButton active value="upcoming" onClick={() => setToggle('upcoming')}>Upcoming</ToggleButton>
            :
            <ToggleButton value="upcoming" onClick={() => setToggle('upcoming')}>Upcoming</ToggleButton>
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