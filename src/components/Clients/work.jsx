import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdOutlineWork} from "react-icons/md";
import { motion } from "framer-motion";
<VerticalTimeline>
            <style>{`
    .vertical-timeline::before {
      background-color: black;
    }
  `}</style>
          <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8}}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4158d0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #4158d0' }}
                date={<span style={{ color: "black" }}>
                    2023 - present
                </span>}
                iconStyle={{ background: 'black', color: '#4158d0' }}
                icon={<MdOutlineWork />}
                >
                <h3 className="vertical-timeline-element-title" style={{color:"black", fontFamily:"aveneir next"}}>Graduate Student Assistant</h3>
                <h5 className="vertical-timeline-element-subtitle" style={{color:"black", fontFamily:"aveneir next"}}>Malt Group</h5>
                <ul>
                  <li style={{fontFamily:"aveneir next"}}> Streamlined the sensor data for 100+ traffic intersections in large scale cities like Orlando for efficient real-time traffic monitoring.</li>
                  <li style={{fontFamily:"aveneir next"}}> Harnessed technologies like Node.js, React, Express.js, PostgreSQL, AWS Cloud and Auth0 to design and develop a fully functional web application.</li>
                  <li style={{fontFamily:"aveneir next"}}>Implemented a high-availability deployment strategy using Kubernetes and Docker services on AWS, ensuring 0 downtime and seamless updates across multiple cluster nodes.</li>
                </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4158d0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #4158d0' }}
                date={<span style={{ color: "black" }}>
                    2022 - 2022
                </span>}
                iconStyle={{ background: 'black', color: '#4158d0' }}
                icon={<MdOutlineWork />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"black", fontFamily:"aveneir next"}}>Associate Nodejs Developer</h3>
                <h5 className="vertical-timeline-element-subtitle" style={{color:"black", fontFamily:"aveneir next"}}>Celebal Technologies</h5>
                <ul>
                  <li style={{fontFamily:"aveneir next"}}>Developed a Microsoft Teams Bot application utilizing Node.js, Microsoft Bot Framework Composer, and Azure cloud technologies, trimming the HR processing manual load by 30%.</li>
                  <li style={{fontFamily:"aveneir next"}}>Collaborated with a team of 9 interns and 2 senior developers for successful application deployment, enabling easier time off or vacation requests directly through Teams, streamlining HR processes and reducing response times for leave requests.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4158d0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #4158d0' }}
                date={<span style={{ color: "black" }}>
                    2022 - 2022
                </span>}
                iconStyle={{ background: 'black', color: '#4158d0' }}
                icon={<MdOutlineWork />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"black", fontFamily:"aveneir next"}}>Full Stack Web Developer Intern</h3>
                <h5 className="vertical-timeline-element-subtitle"style={{color:"black", fontFamily:"aveneir next"}}>Fintroops Fintech Solutions PVT LTD</h5>
                <ul>
                  <li style={{fontFamily:"aveneir next"}}>Designed a full-stack web application for a car trading platform using technologies including Express, Bootstrap, JavaScript, and Node.js with an active role in all stages of the software development life cycle.</li>
                  <li style={{fontFamily:"aveneir next"}}>Improved user experience by 20% and increased engagement by 15% through contributions to development of useful packages and features, leading to an increase in audience capture.</li>
                </ul>
            </VerticalTimelineElement>
            </motion.div>
        </VerticalTimeline>