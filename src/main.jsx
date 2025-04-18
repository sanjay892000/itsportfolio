import App from './App.jsx';
import './index.css'
import { createRoot } from 'react-dom/client'

/* import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'; */
import StateProvider from './contextapi/StateProvider';

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='project' element={<Project />} />
      <Route path='project/:id' element={<ProjectDetails />} />
      <Route path='notes' element={<Notes />} />
      <Route path='contact' element={<Contact />} />
      <Route path='reviews' element={<Reviews />}>
        <Route path='signin' element={<SocialLogin />} />
        <Route path='feedback' element={<ReviewsModal />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
) */

createRoot(document.getElementById('root')).render(
  <StateProvider>
    <App />
  </StateProvider>
)
