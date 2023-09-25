import React from "react";
import styled from "styled-components";
import Card from "./SkillCard";
import { Slide } from "react-awesome-reveal";
import Slider from "react-slick";
import {
  DiJavascript1,
  DiLinux,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiErlang,
  DiMysql,
} from "react-icons/di";
import {
  SiDjango,
  SiPostman,
  SiPostgresql,
  SiSelenium,
  SiDotnet,
  SiBootstrap,
  SiAmazonaws,
  SiSpringboot,
  SiFlask,
} from "react-icons/si";
import { TbBrandTypescript, TbBrandGolang } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { GrDocker } from "react-icons/gr";
import { BiLogoCPlusPlus, BiLogoKubernetes } from "react-icons/bi";
import { BsFiletypeCss, BsFiletypeSql } from "react-icons/bs";
const Skills = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Container id="Skills">
      <Slide direction="down">
        <h1>
          <span className="green">Skills</span>
        </h1>
      </Slide>
      <slide>
        <Cards>
          <div>
            <Slider {...settings}>
              {/* <Card Img={DiJava} title={"C"} /> */}

              <Card Img={DiJava} title={"Java"} />
              <Card Img={DiPython} title={"Python"} />
              <Card Img={TbBrandGolang} title={"GoLang"} />
              <Card Img={SiDotnet} title={".NET"} />
              <Card Img={DiJavascript1} title={"JavaScript"} />
              <Card Img={TbBrandTypescript} title={"TypeScript"} />
              <Card Img={BiLogoCPlusPlus} title={"C++ "} />
              <Card Img={AiFillHtml5} title={"HTML"} />
              <Card Img={BsFiletypeCss} title={"CSS"} />
              <Card Img={SiBootstrap} title={"Bootstrap"} />
              <Card Img={DiErlang} title={"ErLang"} />
              <Card Img={SiSpringboot} title={"Spring Boot"} />
              <Card Img={BsFiletypeSql} title={"SQL"} />
              <Card Img={GrDocker} title={"Docker"} />
              <Card Img={BiLogoKubernetes} title={"Kubernetes"} />
              <Card Img={SiAmazonaws} title={"AWS"} />
              <Card Img={DiLinux} title={"Linux"} />
              <Card Img={DiReact} title={"React"} />
              <Card Img={SiDjango} title={"Django"} />
              <Card Img={SiFlask} title={"Flask"} />
              <Card Img={DiGit} title={"Git"} />
              <Card Img={DiNodejs} title={"Node.js"} />
              <Card Img={SiPostman} title={"Postman"} />
              <Card Img={DiMysql} title={"MySQL"} />
              <Card Img={DiMongodb} title={"MongoDB"} />
              <Card Img={SiPostgresql} title={"Postgresql"} />
              <Card Img={SiSelenium} title={"Selenium"} />
            </Slider>
          </div>
        </Cards>
      </slide>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0;
  @media (max-width: 840px) {
    width: 80%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 1rem;
  gap: 1rem;
`;
