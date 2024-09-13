import React, { useRef } from 'react';
import './experience.css'
import { FaRobot } from "react-icons/fa";
import { BsClipboardData } from "react-icons/bs";
import { PiGraphBold } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { Collapse } from "react-collapse";
import { MdExpandMore } from "react-icons/md";
import { useState } from 'react'
import classNames from 'classnames';

const data = [
    {
      id: 1,
      image: <FaRobot/>,
      title: 'Software Engineer @Salesforce',
      time: '2023 May - Recent',
      description1:'• Led the design and development of a feature that allows better management of messaging capacity and pause functionality for contact center agents. Worked closely with other teams to integrate external data, update the user interface, and ensure seamless functionality within the core system. Also played a key role in designing a multi-party conference call feature, contributing to technical decisions, and leading rigorous testing sessions to guarantee high-quality performance.',
      description2:'• Resolved a critical incident involving the supervisor listen-in feature, diagnosing and fixing a bug affecting over 250 enterprise clients and 1000+ end users. Identified the root cause and delivered a solution in three hours, minimizing downtime and maintaining service reliability.',
      description3:'• Overcame complex challenges while developing dynamic configuration for demo telephony connector, refactoring a critical component used by four teams and 50+ internal users. Designed and implemented refactoring, mitigating timing issues and potential regressions through collaboration with multiple teams and extensive testing.',
      description4:'• Partnered closely with product managers to address customization needs and urgent client requests. Worked with QA to propose and execute comprehensive test plans, organizing cross-team testing sessions. Maintained strong relationships with key partners like AWS and Natterbox through regular meetings, providing technical support and Q&A for their integration needs.',
      description5:'• Mentored a junior engineer, guiding investigation processes, debugging tools, and development practices. Led weekly debugging sessions and facilitated knowledge transfer to improve team efficiency and skill development.'
    },
    {
      id: 2,
      image: <VscTools/>,
      title: 'Software Engineer Intern @Salesforce',
      time: '2022 May - 2022 Aug',
      description1:'• Created a robust health check tool that validates configurations and communicates investigation results to admins.',
      description2:'• Enhanced customer service efficiency by implementing a visualized health check process.',
      description3:'• Utilized a tech stack including Aura, LWC framwork, and Javascript for frontend, integrating backend in Java.',
      description4:'• Contributed to Salesforce inclusivity goals and awareness as a FutureForce Equality Mentorship FY23 Mentee, focusing on fostering an inclusive environment.',
    },
    {
        id: 3,
        image: <PiGraphBold/>,
        title: 'Data Engineer Intern @Kronos Research',
        time: '2021 Apr - 2021 Jul',
        description1:'• Engineered backend infrastructure and established a pipeline for data ingestion from various Crypto trading platforms (Kraken Futures, Okex, Crypto.com, etc.), transforming data into a usable internal format using Python, RestAPI, Websockets, and MySQL.',
        description2:'• Implemented a visual representation of trading performance through Grafana, facilitating daily performance reviews for traders. Identified risks in portfolios, resulting in a reduction of potential losses',
        description3:'• Streamlined reconciliation processes by automating variance detection in both the database and pipeline, leading to a significant 10% time reduction in the reconciliation process.',
        description4:'',
      },    
      {
        id: 4,
        image: <BsClipboardData/>,
        title: 'Senior Assurance Associate @PwC',
        time: '2015 Sep - 2019 June',
        description1:'• Led two I.P.O cases for biotech companies.',
        description2:'• Planned, led, and file reports for annual auditing to 10+ companies annually.',
        description3:'• Successfully trained and supervised a team of 3 associates to accomplish seasonal reviews and annual reports.',
        description4:'',
    }
]

export const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
      
        <section id="experience">
          <scrip></scrip>
            <h5>Industrial Background</h5>
            <h2>Work Experience</h2>
            <div className="experience__container">
            { 
                data.map(({id, title, image, time, description1, description2, description3, description4, description5}) => {
                    return(
                    <article key={id} className="experience__options">
                        <div  className="title_blocks">
                          <div className="title_block">
                            <h2>
                                <span className="title_img">{image}</span>
                            </h2>
                          </div>
                          <div className="title_block">
                            <h2>
                                <span className="title">{title}</span>
                            </h2>
                          </div>
                          <div className="title_block">
                            <h2>
                                <span className="collapse" 
                                      data-toggle="collapse"
                                      onClick={event => setActiveIndex(
                                          activeIndex === id ? null : id
                                      )}
                                      data-target="#collapseExample"
                                      aria-expanded="false"
                                      aria-controls="collapseExample"><MdExpandMore/></span>
                            </h2>
                          </div>
                        </div>
                        
                        <Collapse isOpened={activeIndex === id}>
                          <div className={classNames("experience_description",
                                        {show: activeIndex === id,
                                          hide: activeIndex !== id
                                          })}>
                              <p>{time}</p>
                              <p>{description1}</p>
                              <p>{description2}</p>
                              <p>{description3}</p>
                              <p>{description4}</p>
                              <p>{description5}</p>
                          </div>                          
                        </Collapse>

                    </article>
                    )
                })
            } 
            </div>
        </section>

    )
}
