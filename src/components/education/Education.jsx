import React, { useState } from 'react';
import './education.css'
import { FaPlus } from "react-icons/fa";

const data = [
    {
      id: 1,
      image: <FaPlus/>,
      title: 'Carnegie Mellon University',
      major: 'Major: Information System Management',
      description:'Courses taken: Data structure, OOP in Java, Computer Systems, Web app, Database, Distributed Systems, Data Science',
    },
    {
      id: 2,
      image: <FaPlus/>,
      title: 'National Taiwan University',
      major: 'Major: Accounting',
      description:'•  ',
    },
]

export const Education = () => {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    return (
        <section id="education">
          <scrip></scrip>
            <h5>Academic background</h5>
            <h2>Education</h2>
            <div className="education__container">
              <article className="education__options toggle js-toggle">
                <div className="education__titles">
                  <div className="education__title">
                    <h2>
                        <span className="title">Carnegie Mellon University </span>
                    </h2>
                  </div>
                </div>
                <div className="major">
                  <span>Information System Management</span>
                </div>
              </article>
              <article className="education__options toggle js-toggle">
                <div className="education__titles">
                  <div className="education__title">
                    <h2>
                        <span className="title">National Taiwan University  </span>
                    </h2>
                  </div>
                </div>
                <div className="major">
                  <span>Accounting</span>
                </div>
              </article>
            </div>
        </section>

    )
}
