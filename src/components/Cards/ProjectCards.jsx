import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import styled from 'styled-components';


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: white;
    color: black;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    background: rgb(133, 76, 230);
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: rgb(232, 67, 147);
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: rgb(155, 154, 154);
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const LinkCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const LinkIcon = styled.a`
   color: rgb(133, 76, 230); 
    font-size: 30px;
    border-radius: 50%;
    margin-right: 10px;
    :hover{
        color: white;
    }
`

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}  
        style={{
            cursor: project.category == 'upcoming'? 'none' : 'pointer',
            opacity: project.category == 'upcoming'? 0.5 : 1
            }}>
            <Image src={project.image} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                {/* <Date>{project.date}</Date> */}
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, i) => (
                    <Avatar src={member.img} key={i} />
                ))}
            </Members>
            {/* <Button>View Project</Button> */}
            <LinkCard>
                <LinkIcon href={project.github} target={"_black"}><FaGithub /></LinkIcon>
                <LinkIcon href={project.webapp} target={"_black"}><FaGlobe /></LinkIcon>
            </LinkCard>
        </Card>
    )
}

export default ProjectCards