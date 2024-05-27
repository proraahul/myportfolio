import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, ColorText } from './NavbarStyledComponent'
import { FaGithub } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <ColorText>&lt;</ColorText>Rahul
          <div style={{ color: theme.primary }}>/</div>Saini
          <ColorText>&gt;</ColorText>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close /> : <FaBars />}
        </MobileIcon>
        <NavItems>
          {/* <NavLink to={'/about'} >About</NavLink> */}
          <NavLink to={'/skills'}>Skills</NavLink>
          <NavLink to={'/experience'}>Experience</NavLink>
          <NavLink to={'/projects'}>Projects</NavLink>
          <NavLink to={'/education'}>Education</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
          <FaGithub /> {" "} <span>Github Profile</span>
            </GitHubButton>
        </ButtonContainer>
        {
          isOpen && 
          <MobileMenu isOpen={isOpen}>
            <MobileLink to="/about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>

            <MobileLink to='/skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>

            <MobileLink to='/experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>

            <MobileLink to='/projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>

            <MobileLink to='/education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>

            <MobileLink to='/contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>

            <GitHubButton style={{marginTop: '15px', padding: '10px 16px', color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>

          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar