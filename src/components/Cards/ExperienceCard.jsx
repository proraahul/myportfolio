import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, #fff 4px 7px 0px 0px,  5px 5px 0px 0px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    /* border: 0.1px solid #306EE8; */
    /* box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px; */
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    /* color: ${({ theme }) => theme.text_primary}; */
    color: rgb(232, 67, 147);
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    /* color: #fefefebb; */
    color: rgb(133, 76, 230);
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    /* color: ${({ theme }) => theme.text_secondary}; */
    color: #9b9a9a;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    /* color: ${({ theme }) => theme.text_primary}; */
    color: #9b9a9a;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const ExperienceCard = ({ experience1 }) => {
    return (
        <Card>
            <Top>
                <Image src={experience1.img} />
                <Body>
                    <Role>{experience1.role}</Role>
                    <Company>{experience1.company}</Company>
                    <Date>{experience1.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience1?.desc &&
                    <Span>{experience1?.desc}</Span>

                }
                {experience1?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience1?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience1.doc &&
                <a href={experience1.doc} target="new">
                    <Document src={experience1.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard;
