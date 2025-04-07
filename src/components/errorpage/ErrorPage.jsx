import React from 'react'
import './errorpage.css'
import { Link } from 'react-router-dom'
function ErrorPage() {


   const goBackFun = () =>{
        window.history.back()
    }

    return (
        <section id='error-section'>
            {/* <section id='error-section'>
            <div className="about-title">
                <h1>404 Not  <span>Found</span></h1>
                <h2 className='resume'>errors</h2>
            </div>
            <p></p>
        </section> */}
            <div className="noise"></div>
            <div className="overlay"></div>
            <div className="terminal">
                <h1>Error <span className="errorcode">404</span></h1>
                <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <p className="output">Please try to <Link className='error-button' onClick={goBackFun}>go back</Link> or <Link className='error-button' to="/">return to the homepage</Link>.</p>
                <p className="output">Good luck.</p>
            </div>
        </section>

    )
}

export default ErrorPage
