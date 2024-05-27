import styled from 'styled-components';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Bio } from '../../data/constants';


const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 100;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0.5rem 1rem;
  font-size: 1.5rem;
  color: #fff;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  svg{
    width: 1.5rem;
    height: 1.5rem;
  }
  :hover {
    /* background: rgb(133, 76, 230); */
    /* color: rgb(133, 76, 230); */
    color: rgb(133, 76, 230);
  }
`;

function SocialLinks() {
  return (
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FaFacebookSquare /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><FaLinkedin /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><FaInstagram /></SocialMediaIcon>
        </SocialMediaIcons>
    );
}

export default SocialLinks;