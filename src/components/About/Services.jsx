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
        <h4><span className="green">About</span>
        <h4 style={{fontFamily:"Calibri",marginTop:"10px",lineHeight:"1.5"}}>

        I am a skilled Developer with a strong educational background in Computer Science. My technical skills include programming languages such as C, C++, Java, Python, and Go, as well as databases like MySQL, MongoDB, and Oracle. I have experience working as Full stack developer with various frameworks and tools such as Django, Flask, Python, React, Node.js, and Git. My professional experience includes working as a Python Developer for Virtual Review Assist and as a Software Engineer at Wipro Technologies. I have also worked on several projects, including Kora, Courage to Change, Cancer Prediction using Machine Learning, Bitcoin Miner and Twitter Clone. Overall, I am a versatile and passionate developer with a proven track record of delivering high-quality work. </h4>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Full Stack Web Developer"}
            // disc={`I am proficient in programming languages such as JavaScript, Python, GO and have experience building full-stack web applications using frameworks such as React, Node.js, and Django`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Software Engineer"}
            disc={``}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Python Developer"}
            disc={``}
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
