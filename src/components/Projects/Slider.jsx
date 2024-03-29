import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';



let data = [
    {
        img : "https://www.inewsten.com/wp-content/uploads/2023/04/What-Is-Full-Stack-Web-Development.png",
        role: "Fullstack Web Developer",
        link:"https://github.com/arikaki/SE-project",
        disc: "Developed a web application similar to Quora using React, Material UI, HTML/CSS, Golang, MongoDB and implemented the Authentication using Auth0.",
    },
    {
      img : "https://imgtr.ee/images/2023/09/24/a7ac128560991fa440a9429051b6f354.png",
      role: "Fullstack Web Developer",
      link:"https://ec2-18-189-18-248.us-east-2.compute.amazonaws.com/home",
      disc: "Designed and developed a Library Management System, allows users to reserve books by making a payment using Typescript, Java, React, SpringBoot, Stripe, Docker, AWS.",
  },
    {
        img : "https://goobar.b-cdn.net/wp-content/uploads/2021/03/android_category_thumbnail.png",
        role: "Andriod Developer",
        link:"https://github.com/lokesh-meesala/Courage-to-Change",
        disc : "Developed a application called Courage to change to help people overcome drug, alcohol abuse through behavioral change and Rewards with features leaderboard, rewards, activity feed and Navigation Tab using SQLite"
    },
    {
        img : "https://bernardmarr.com/img/What%20is%20the%20Difference%20Between%20Blockchain%20And%20Bitcoin.png",
        role: "Developer",
        link:"https://github.com/lokesh-meesala/BitcoinMiner",
        disc : "I have Designed and developed a Bitcoin miner using Erlang as part of academic curriculum and Optimized its performance using the principles of Distributed Operating Systems and Concurrency."
        
    },
    {
        img : "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/09/Twitter.jpg?w=1500&quality=82&strip=all&ssl=1",
        role: "Developer",
        link:"https://github.com/lokim99/TwitterClone",
        disc : "Developed twitter clone in erlang and implemented functionalities like Register, Login, Tweet, Subscribe, Retweet, My mentions, Hashtag Search, Logout and Optimized its performance."

    },
    {
        img : "https://miro.medium.com/v2/resize:fit:828/format:webp/1*cG6U1qstYDijh9bPL42e-Q.jpeg",
        role: "Developer",
        link:"/",
        disc : "Developed Code by processing huge dataset using NLP, classified data into nine different categories, trained five ML Algorithms, predicted the Probability of Cancer prediction in terms of Logarithmic loss."
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`