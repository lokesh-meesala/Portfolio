import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Card from "./SkillCard.js"
import { Zoom } from 'react-awesome-reveal';
import javascript from "./javascript.svg"
import linux from "./linux.svg"
import python from "./python.svg"
import reactIcon from "./react.svg"
import react from "./react.svg"
import git from "./git.svg" 
import { Slide } from "react-awesome-reveal";
export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <Container id="skills">
                <Slide direction='left'>
                    <h1 className="green">Skills</h1>
                </Slide>
            <Slide direction='right'>
                <Cards>
                    <div>
                        <Slider {...settings}>
                        <Card name="linux"  img={linux} />
                        <Card name="python"  img={python} />
                        <Card name={"javascript"} img={javascript}    />
                        <Card name="react"  img={reactIcon} />
                        <Card name="react"  img={react} />
                        <Card name="git"  img={git} />
                        </Slider>
                        
                    </div>
                </Cards>
            </Slide>
        </Container>
    )
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