import React from 'react'
import htmlicon from '../../image/html-icon.png';
import cssicon from '../../image/userframe.png';
import jsicon from '../../image/js-icon.png';
import reacticon from '../../image/react-icon.png';
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
                    <img src={reacticon} alt="" />
                   <div className="child-notes-card">
                    <h3>react</h3>
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
                    <img src={reacticon} alt="" />
                   <div className="child-notes-card">
                    <h3>react</h3>
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
            </div>
        </section>
    )
}

export default Notes
