import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  /* background: ${({ theme }) => theme.card_light}; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  top: 0px;
  padding: 90px 30px;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
    
  }
  z-index: 1;
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%); */
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  @media (min-width: 280px) {
    width: 400px;
    top: 55%;
 }
 @media (min-width: 375px) {
  width: 550px;
  top: 50%;
 }
 @media (min-width: 428px) {
    top: 53%;
    width: 600px;
 }
 @media (min-width: 640px) {
  width: 750px;
  top: 50%;
  left: 43%;
 }
 @media (min-width: 768px) {
  width: 600px;
  top: 50%;
  left: 50%;
 }
  @media (min-width: 960px) {
    justify-content: center;
    padding: 0 0px;
    /* top: 60%; */
  }
  @media (min-width: 1024px) {
    top: 53%;
    left: 74%;
}
@media (min-width: 1280px) {
    top: 53%;
    left: 77%;
 }
 @media (min-width: 1440px) {
    width: 900px;
    top: 60%;
    left: 75%;
 }
 @media (min-width: 1536px) {
  width: 1000px;
    top: 61%;
    left: 73%;
 }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 1024px) {
    right: 10%;
  }
  @media (max-width: 960px) {
    top: 10%;
  }
  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
    top: 10%;
    left: 1%;
  }
  @media (max-width: 640px) {
    max-width: 380px;
    max-height: 380px;
    top: 50px;
    left: 2%;
  }
  @media (max-width: 400px) {
   width: 250px;
   left: 1%;
  }
  @media (max-width: 320px) {
    left: 1%;
    top: 8%;
    width: 250px;
  }
  @media (max-width: 280px) {
   width: 230px;
   left: 2%;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 48px;
    margin: 16px 0;
    padding: 0;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButtonContainer = styled.div`
  width: 200px;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  background: linear-gradient(to right, #ff7675, #e84393);
  cursor: pointer;
  box-shadow: 5px 5px 0 0 #fff;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20px;
  ::after {
  content: "";
  top: 0;
  left: 0;
  width: 200px;
  height: 50px;
  background-color: rgb(133, 76, 230);
  opacity: 0;
  transition: 0.3s;
  }
  :hover {
  box-shadow: -5px -5px 0 0 #fff;
  transform: scale(0.9);
}
:hover::after {
  opacity: 1;
}
`

export const ResumeButton = styled.a`
    position: absolute;
  text-decoration: none;
  color: #000;
  z-index: 1000;
`;