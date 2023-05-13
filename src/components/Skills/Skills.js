import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "./javascript.svg"
import linux from "./linux.svg"
import python from "./python.svg"
import reactIcon from "./react.svg"
import react from "./react.svg"
import git from "./git.svg" 
export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="linux" experience="1 years" img={linux} />
                <SkillCard name="python" experience="1 years" img={python} />
                <SkillCard name="javascript" experience="1 years" img={javascript} />
                <SkillCard name="react" experience="1 years" img={reactIcon} />
                <SkillCard name="react" experience="1 years" img={react} />
                <SkillCard name="git" experience="1 years" img={git} />
                </Slider>
            </div>
        </div>
    )
}