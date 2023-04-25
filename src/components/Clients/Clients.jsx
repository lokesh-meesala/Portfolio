import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';
// import Wipro from "././images/Wipro.png";

let clients = [
    {
        name : "Wipro Technologies",
        position : "Software Engineer",
        img_url :"https://thumbs2.imgbox.com/b1/5b/Lk4bPgy1_t.png",
        disc : `I have developed 30+ interfaces using Java in SAP PI and played an active role in all stages of the software development lifecycle includingRequirement gathering, Analysis, Development, Testing, Documentation and Deployment. I also resolved 90+ issues, service requests, incidents, performed root cause analysis on critical issues and contributed to server migrations `
    },
    {
        name : "Virtual Review Assist Inc",
        position : "Python & ML Developer",
        img_url : "https://thumbs2.imgbox.com/21/c4/gqXbK3qk_t.png",
        disc : `I have developed image processing algorithms using Python and Linux to enhance processing of compliance issues in construction documents, resulting in an 80% reduction in time. I also authored the Optical Character Recognition code to extract text from images, reducing manual workload by 75%. Additionally, I implemented machine learning algorithms for identifying and extracting information from tables reducing time from days to minutes`
    },
    {
        name : "Virtual Review Assist Inc",
        position : "Backend Developer",
        img_url : "https://thumbs2.imgbox.com/21/c4/gqXbK3qk_t.png",
        disc : `I had developed 20+ REST APIs using Python and MongoDB as the database and integrated them seamlessly into Django. I also developed and trained a chatbot to handle common questions related to Florida Building Resident Codes.
        
        
        
        
        `
    },
    
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='skills'>
        <Slide direction="left">
            <span className="green">Work Experience</span>
            <h1>Where I worked</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`