import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/themes'
import Navbar from "./components/Navbar";
import './App.css';
import { Outlet } from 'react-router-dom';
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { ScrollToTop } from "./utils/ScrollToTop";
import SocialLinks from "./components/SocialLinks";

const Body = styled.div`
  overflow: hidden;
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ScrollToTop />
      <Navbar />
      <Body>
        <Outlet  openModal={openModal} setOpenModal={setOpenModal} />
        {openModal.state &&
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        }
        <SocialLinks />
      </Body>
    </ThemeProvider>
    </>
  );
}

export default App;