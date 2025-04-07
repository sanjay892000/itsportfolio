import React from 'react'
import './about.css'
import Skills from '../skills/Skills'
import Experience from '../experience/Experience'
function About() {
  return (
    <>
      <section id='about-section'>
        <div className="about-title">
          <h1>About <span>me</span></h1>
          <h2 className='resume'>resume</h2>
        </div>
        <div className="personal-info">
          <div className="left-info">
            <h1>personal infos</h1>
            <div className="info-container">
              <div className="info-col">
                <p>Name: <span>Sanjay Singh</span></p>
                <p>Age: <span>25 Years</span></p>
                <p>Email: <span>sanjay892000@gmail.com</span></p>
                <p>phone: <span>+91-6388774338</span></p>
                <p>Freelance: <span style={{ color: 'green' }}>Available</span></p>
                <a className='stylish-button' href="" download><span>Download cv</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg> </a>
              </div>
              <div className="info-col">
                <p> Address: <span>Lucknow, UP</span></p>
                <p> Work: <span>Hanumant Technology</span></p>
                <p>Github: <span>sanjay892000</span></p>
                <p>langages: <span>Hindi, English</span></p>
                <p>Nationality: <span>Indian</span></p>
              </div>
            </div>
          </div>
          <div className="right-info">
            <div className="details-card">
              <p>02+</p>
              <h1>years of experience</h1>
            </div>
            <div className="details-card">
              <p>243</p>
              <h1>Select Student</h1>
            </div>
          </div>
        </div>
      </section>
      <Skills/>
      <Experience/>
    </>
  )
}

export default About
