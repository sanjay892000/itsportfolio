import React from 'react'
import './heropage.css'
import myimage from '../../image/myimg.jpeg'
import frame from '../../image/userframe.png'
import { NavLink } from 'react-router-dom'
function Heropage() {
  return (
    <div id='main-section'>
      <aside className="home-image">
        <img src={myimage} alt="loading"/>
      </aside>
      <article className='home-about'>
        <h1>I'm Sanjay Singh</h1>
        <h1>MERN-Stack <span>Developer</span></h1>
        <p>I'm a passionate MERN Stack Developer with expertise in building high-performance, scalable web applications using MongoDB, Express.js, React, and Node.js. I focus on writing clean, efficient code and creating seamless user experiences.</p>
        <NavLink className='stylish-button'> <span>more about me</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg> </NavLink>
      </article>
    </div>
  )
}

export default Heropage
