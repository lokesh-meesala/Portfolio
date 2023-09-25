import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="about">
      <Slide direction="down">
        <h4>
        <h2><span className="green">About</span></h2>
          <h4 style={{fontFamily:"Calibri",marginTop:"10px",lineHeight:"1.5"}}>

              I'm a computer science professional with a Master's degree in Computer Science from the University of Florida. My journey in technology has equipped me with a diverse skill set, encompassing programming languages such as C++, .Net, Java, Python, GO, and more. I'm well-versed in various tools and frameworks, including databases like MySQL and MongoDB, and I have experience with Docker, Git, AWS, and more.

              Throughout my career, I've contributed to impactful projects, from developing Web applications, Java Interfaces, Testing, REST APIs and integrating Chatbots to automating complex processes using image processing and machine learning. I'm driven by a passion for innovation and problem-solving, and I'm dedicated to staying at the forefront of technology. Explore my portfolio to discover my journey and the projects that reflect my expertise in the world of computer science. 
            </h4>

          <h3 style={{marginTop:"10px"}}><span className="green">My Mission</span></h3>
            <h4 style={{fontFamily:"Calibri",marginTop:"10px",lineHeight:"1.5"}}>

              My mission is to bridge the gap between cutting-edge technology and practical solutions. I thrive on tackling complex challenges and leveraging technology to make a meaningful impact. Whether it's building scalable web applications, designing secure systems, or harnessing the power of machine learning for data analysis, I'm committed to pushing the boundaries of what's possible in the tech world. Thank you for visiting my portfolio, and I invite you to explore my projects and achievements to gain insight into my journey and vision for the future of technology. 
           </h4>
         
        </h4>
        <h1 style={{marginTop:"10px"}}><span className="green" >What I Do</span></h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Full Stack Web Developer"}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Software Engineer"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Python Developer"}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
