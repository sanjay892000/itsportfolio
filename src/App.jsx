
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import { useEffect } from 'react';
import { useStateContext } from './contextapi/stateContext';
import Home from './components/heropage/Heropage.jsx'
import About from './components/about/About.jsx'
import Project from './components/projects/Project.jsx';
import ProjectDetails from './components/projects/projectdetails/ProjectDetails.jsx';
import Notes from './components/notes/Notes.jsx';
import Contact from './components/contactus/Contact.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import ErrorPage from './components/errorpage/ErrorPage.jsx';
import SocialLogin from './components/modal/SocialLogin';
import ReviewsModal from './components/modal/ReviewsModal';


function App() {

  const { theme } = useStateContext()
  useEffect(() => {
    const htmlTag = document.querySelector('body');
    htmlTag.classList.remove('light', 'dark');
    htmlTag.classList.add(theme);
  }, [theme])

  return (
    <main id='portfolio-page'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='project' element={<Project />} />
          <Route path='project/:id' element={<ProjectDetails />} />
          <Route path='notes' element={<Notes />} />
          <Route path='contact' element={<Contact />} />
          <Route path='reviews' element={<Reviews />}>
            <Route path='sociallogin' element={<SocialLogin />} />
            <Route path='feedback' element={<ReviewsModal />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
