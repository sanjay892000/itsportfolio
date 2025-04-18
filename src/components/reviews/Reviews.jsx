import React, { useEffect} from 'react'
import './reviews.css'
import SocialLogin from '../modal/SocialLogin';
import ReviewCard from './reviewcard/ReviewCard';
import ReviewCarousel from './review-carousel/ReviewCarousel';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contextapi/stateContext';
import ReviewsModal from '../modal/ReviewsModal';
import { localHostUrls } from '../../BaseURLS';
const OPTIONS = { loop: true }

function Reviews() {
    const { handleOpen, fetchReviewsData, slides } = useStateContext()
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const token = query.get("token");
        if (token) {
            localStorage.setItem("token", token); // optional
        }
        if (!localStorage.getItem('token')) {
            handleOpen()
            navigate('sociallogin')
        }

    }, [location.pathname]);



    useEffect(() => {
        fetchReviewsData()
    }, [])

    const logoutFun = () => {
        localStorage.removeItem('token')
        handleOpen()
    }

    return (
        <section id='reviews-section'>
            <div className="about-title">
                <h1>write <span>Reviews</span></h1>
                <h2 className='resume'>Reviews</h2>
            </div>
            <Outlet />
            <div className="reviews-container">
                <ReviewCarousel slides={slides} options={OPTIONS} />
            </div>
            <div className="reviews-card-container">
                {localStorage.getItem('token') ? <Link to="feedback" onClick={handleOpen} className="add-reviews">
                    <i className="fa-solid fa-plus"></i>
                </Link> : <Link to="sociallogin" onClick={handleOpen} className="add-reviews">
                    <i className="fa-solid fa-plus"></i>
                </Link>}
            </div>
        </section>
    )
}

export default Reviews
