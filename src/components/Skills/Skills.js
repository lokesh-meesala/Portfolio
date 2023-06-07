import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Card from "./SkillCard.js";
import { Zoom } from "react-awesome-reveal";
import javascript from "../assets/skills/javascript.svg";
import linux from "../assets/skills/linux.svg";
import python from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";
import django from "../assets/skills/django.svg";
import git from "../assets/skills/git.svg";
import java from "../assets/skills/java2.svg";
import Cp from "../assets/skills/C++.svg";
import C from "../assets/skills/C.svg";
import html from "../assets/skills/htmlicon.svg";
import css from "../assets/skills/css.svg";
import sql from "../assets/skills/icons8-sql-100.png";
import erlang from "../assets/skills/erlang.svg";
import golang from "../assets/skills/golang.svg";
import nodejs from "../assets/skills/nodejs.svg";
import postman from "../assets/skills/postman.svg";
import mysql from "../assets/skills/mysql.svg";
import mongodb from "../assets/skills/mongodb.svg";
import { Slide } from "react-awesome-reveal";
export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <Container id="skills">
      <Slide direction="left">
        <h1 className="green">Skills</h1>
      </Slide>
      <Slide direction="right">
        <Cards>
          <div>
            <Slider {...settings}>
              <Card name="C" img={C} />
              <Card name="C++" img={Cp} />
              <Card name="Java" img={java} />
              <Card name="Python" img={python} />
              <Card name="JavaScript" img={javascript} />
              <Card name="HTML" img={html} />
              <Card name="CSS" img={css} />
              <Card name="SQL" img={sql} />
              <Card name="Erlang " img={erlang} />
              <Card name="Go Lang " img={golang} />
              <Card name="Django " img={django} />
              <Card name="React" img={reactIcon} />
              <Card name="Git" img={git} />
              <Card name="Node.js" img={nodejs} />
              <Card name="Postman" img={postman} />
              <Card name="MySQL" img={mysql} />
              <Card name="MongoDB" img={mongodb} />
              <Card img={linux} name="Linux" />
            </Slider>
          </div>
        </Cards>
      </Slide>
    </Container>
  );
}
const Container = styled.div`
  width: 80%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1 rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 1rem;
  gap: 1rem;
  justify-content: center;
`;
