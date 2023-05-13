import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdOutlineWork} from "react-icons/md";
import {SiWipro,SiPython, SiMongodb} from "react-icons/si";
import { motion } from "framer-motion";
import { Container, Row } from 'react-bootstrap'
import { Zoom } from "react-awesome-reveal";
import wipro from "./Wipro.png";

const Experience = () => (
    <>
    <Container id='workexp'>
      <Row style={{ textAlign:"center" ,paddingLeft:"50px"}}>
        <Zoom>
        <h1 className="green">Work Experience</h1>
        </Zoom>

      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <VerticalTimeline>
              <style>{`
      .vertical-timeline::before {
        background-color: #4158d0;
      }
    `}</style>
          <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }}>

          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#01be96', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #01be96' }}
                date={<span style={{ color: "white" }}>
                    Oct 2022 - Dec 2022
                </span>}
                iconStyle={{ background: 'white', color: '#4158d0' }}
                icon={<SiMongodb />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"white", fontFamily:"serif"}}>Graduate Student Assistant - Backend Developer</h3>
                <h3 className="vertical-timeline-element-subtitle" style={{color:"white", fontFamily:"calibri"}}>Virtual Review Assist Inc</h3>
                <ul>
                  <li style={{paddingTop: "5px",fontFamily:"Calibri", color:"black"}}>Developed 20+ REST APIs in python using MongoDB as database</li>
                  <li style={{fontFamily:"Calibri", color:"black"}}>Seamlessly integrated all the developed APIs into Djano</li>
                  <li style={{fontFamily:"Calibri", color:"black"}}>Developed and Trained Chatbot for handling common questions that are related to Florida Building Resident Codes</li>
                </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#01be96', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #01be96' }}
                date={<span style={{ color: "white" }}>
                    Mar 2022 - Sep 2022
                </span>}
                iconStyle={{ background: 'white', color: '#4158d0' }}
                icon={<SiPython />}
                >
                <h3 className="vertical-timeline-element-title" style={{color:"white", fontFamily:"serif"}}>Graduate Student Assistant - Python & ML Developer</h3>
                <h3 className="vertical-timeline-element-subtitle" style={{color:"white", fontFamily:"Calibri"}}>Virtual Review Assist Inc</h3>
                <ul>
                  <li style={{paddingTop: "5px",fontFamily:"Calibri", color:"black"}}> Developed image processing algorithms using Python and Linux to enhance processing of compliance issues in construction documents, resulting in 80% reduction of time.</li>
                  <li style={{fontFamily:"Calibri", color:"black"}}> Authored code using Optical Character Recognition to extract text from images, reducing manual workload by 75%. </li>
                  <li style={{fontFamily:"Calibri", color:"black"}}> Developed a code using YOLO model to identify only text boxes that are likely to be relevant to Florida Building codes.</li>
                  <li style={{fontFamily:"Calibri",color:"black"}}>Implemented machine learning algorithms for identifying and extracting information from tables reducing time from days to minutes.</li>
                  
                </ul>
            </VerticalTimelineElement>

           
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#01be96', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #01be96' }}
                date={<span style={{ color: "white" }}>
                   Nov 2019 - Oct 2021
                </span>}
                iconStyle={{ background: 'white', color: '#4158d0' }}
                icon={<SiWipro />} 
            >
                <h3 className="vertical-timeline-element-title" style={{color:"white", fontFamily:"serif"}}>Software Engineer - Wipro Technologies</h3>
                {/* <h3 className="vertical-timeline-element-subtitle"style={{color:"white", fontFamily:"Calibri"}}>Wipro Technologies LTD</h3> */}
                <ul>
                  <li style={{paddingTop: "10px",fontFamily:"Calibri", color:"black"}}>Developed 25+ interfaces using Java in SAP PI with active role in all stages of Software Development Lifecycle such as Requirement gathering, Analysis, Development, Testing, Documentation and Deployment.</li>
                  <li style={{fontFamily:"Calibri", color:"black"}}>Resolved 90+ issues, Service requests, Incidents, Performed Root cause analysis on critical issues which includes three P1-tickets.</li>
                  <li style={{fontFamily:"Calibri", color:"black"}}>Maintenance of Production, Development and Quality Environments.</li>
                  <li style={{fontFamily:"Calibri", color:"black"}}>Enhanced the resolution times by 40% by implementing the idea of Continuous Monitoring and Contributed to Server Migrations by testing 120+ Interfaces each time and resolving errors.</li>
                  <li style={{fontFamily:"Calibri", color:"black"}}>Trained in Informatica, PL/SQL, SAP BO during training period at Wipro.</li>
                </ul>
            </VerticalTimelineElement>
            </motion.div>
        </VerticalTimeline>
      </Row>
    </Container>
    

        
    </>
);

export default Experience;

// const Container = styled.div`
//   .heading1{
//     h1{
//       font-size: 1.9rem;
//     }
//   }
// `
