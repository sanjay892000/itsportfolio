import React from 'react'
import htmlicon from '../../image/html-icon.png';
import cssicon from '../../image/css-logo.png';
import jsicon from '../../image/js-icon.png';
import reacticon from '../../image/react-icon.png';
import bootstrap from '../../image/bootstrap-logo.png';
import tailwind from '../../image/tailwindcss-icon.png';
import mongodb from '../../image/mongodb-logo.png';
import nodeicon from '../../image/nodejs-logo.png';
import './notes.css'


function Notes() {
    return (
        <section id='notes-section'>
            <div className="about-title">
                <h1>get <span>notes</span></h1>
                <h2 className='resume'>notes</h2>
            </div>
            <div className="notes-container">
                <div className="notes-card">
                    <img src={htmlicon} alt="" />
                   <div className="child-notes-card">
                    <h3>HTML</h3>
                    <button>view notes</button>
                   </div>
                </div>
                <div className="notes-card">
                    <img src={cssicon} alt="" />
                   <div className="child-notes-card">
                    <h3>CSS</h3>
                    <button>view notes</button>
                   </div>
                </div>
                <div className="notes-card">
                    <img src={jsicon} alt="" />
                   <div className="child-notes-card">
                    <h3>javaScript</h3>
                    <button>view notes</button>
                   </div>
                </div>
                <div className="notes-card">
                    <img src={reacticon} alt="" />
                   <div className="child-notes-card">
                    <h3>react</h3>
                    <button>view notes</button>
                   </div>
                </div>
                <div className="notes-card">
                    <img src={bootstrap} alt="" />
                   <div className="child-notes-card">
                    <h3>Bootstrap</h3>
                    <button>view notes</button>
                   </div>
                </div>
                <div className="notes-card">
                    <img src={tailwind} alt="" />
                   <div className="child-notes-card">
                    <h3>Tailwind css</h3>
                    <button>view notes</button>
                   </div>
                </div>
                <div className="notes-card">
                    <img id='mongo' src={mongodb} alt="" />
                   <div className="child-notes-card">
                    <h3>MongoDB</h3>
                    <button>view notes</button>
                   </div>
                </div>
                <div className="notes-card">
                    <img src={nodeicon} alt="" />
                   <div className="child-notes-card">
                    <h3>Nodejs</h3>
                    <button>view notes</button>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Notes
