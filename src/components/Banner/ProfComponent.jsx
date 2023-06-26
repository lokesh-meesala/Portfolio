import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Slide } from "react-awesome-reveal";
import Text from "./Text";
import profilephoto from './img1.svg'


const ProfComponent = () => {
  return (
    <Container id="home">
      <Row>
      <Slide direction="left">
        <Texts>
          <h2>
            Hello
          </h2>
          <h1 className="green">I am Lokesh Meesala</h1>
          <Text/>
          <a href="https://drive.google.com/file/d/1qqYl8Au5-mDAWIChkj8ugOLWZXTRXuYN/view?usp=share_link" target="blank">
            <button>Resume</button>
          </a>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://www.linkedin.com/in/lokeshmeesala/" target="blank">
                  <AiFillLinkedin />
                </a>
              </span>
              <span>
                <a href="https://github.com/lokim99?tab=repositories" target="blank">
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://instagram.com/lokesh_meesala?igshid=MzRlODBiNWFlZA==" target="blank">
                  <AiOutlineInstagram />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="left">
        <Profile>
          <img
            src={profilephoto} 
            alt="profile"
          />
        </Profile>
      </Slide>
      </Row>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1600px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 400px;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  width: 100%;  
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
