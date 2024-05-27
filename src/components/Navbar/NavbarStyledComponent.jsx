import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import _default from '../../themes/default';

export const ColorText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
`;


export const Nav = styled.div`
    /* background-color: ${({ theme }) => theme.card_light}; */
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(30px);
    box-shadow: 0 0 5px rgba(227, 228, 237, 0.15);
    border-bottom: 1px solid rgba(227, 228, 237, 0.15);
    @media (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    letter-spacing: 1px;
    display: flex;
    justify-content: start;
    align-items: center;
    color: #fff;
    font-weight: 600;
    font-size: 1.3rem;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
      font-size: 1.2rem;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    font-size: 13px;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


export const GitHubButton = styled.a`
  font-size: 13px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  border: 3px solid;
  padding: 0.4em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
    :hover {
      box-shadow: 0px 0px 0px 0px;
      top: 5px;
      left: 5px;   
    }
    @media screen and (max-width: 768px) { 
    padding: 0.25em 0.75em;
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 26px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    /* height: 100vh; */
    padding: 40px 40px 24px 40px;
    backdrop-filter: blur(30px);
    /* background: ${({ theme }) => theme.card_light}; */
    background: #1a1a1aea;
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

// export const MobileMenuLink = styled(LinkR)`
//   color: ${({ theme }) => theme.text_primary};
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   :hover {
//     color: ${({ theme }) => theme.primary};
//   }

//   &.active {
//     border-bottom: 2px solid ${({ theme }) => theme.primary};
//   }
// `;

// export const MobileMenuButton = styled.a`
//   border: 1.8px solid ${({ theme }) => theme.primary};
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   height: 70%;
//   border-radius: 20px;
//   color: ${({ theme }) => theme.primary};
//   cursor: pointer;
//   padding: 0 20px;
//   font-weight: 500;
//   text-decoration: none;
//   font-size: 16px;
//   transition: all 0.6s ease-in-out;

//   :hover {
//     background: ${({ theme }) => theme.primary};
//     color: ${({ theme }) => theme.white};
//   }
// `;

export const MobileLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* font-size: 16px; */
  text-transform: uppercase;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;



