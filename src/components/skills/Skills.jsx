import React from 'react'
import './skills.css'
function Skills() {
    return (
        <section id='skills-section'>
            <h1>my skills</h1>
            <div className="skills-container">
                <div className="skill-box">
                    <div id='html-skills' className="skills">
                        <span>95%</span>
                    </div>
                    <p>HTML</p>
                </div>
                <div className="skill-box">
                    <div id='css-skills' className="skills">
                        <span>90%</span>
                    </div>
                    <p>CSS</p>
                </div>
                <div className="skill-box">
                    <div id='js-skills' className="skills">
                        <span>85%</span>
                    </div>
                    <p>javaScript</p>
                </div>
                <div className="skill-box">
                    <div id='tcss-skills' className="skills">
                        <span>80%</span>
                    </div>
                    <p>tailwind css</p>
                </div>
                <div className="skill-box">
                    <div id='react-skills' className="skills">
                        <span>70%</span>
                    </div>
                    <p>react</p>
                </div>
                <div className="skill-box">
                    <div id='node-skills' className="skills">
                        <span>65%</span>
                    </div>
                    <p>node</p>
                </div>
                <div className="skill-box">
                    <div id='mongo-skills' className="skills">
                        <span>75%</span>
                    </div>
                    <p>mongodb</p>
                </div>
                <div className="skill-box">
                    <div id='rest-skills' className="skills">
                        <span>90%</span>
                    </div>
                    <p>Rest api</p>
                </div>
            </div>
        </section>
    )
}

export default Skills
