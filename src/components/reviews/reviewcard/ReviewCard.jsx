import React, { useEffect, useState } from 'react'
import './reviewcard.css'
import { useLocation } from 'react-router-dom';
function ReviewCard(props) {

    const { name, reviews, image, rating, date, email } = props;
    console.log(image)
    const myDate = new Date(date)
    const [starClass, setStarClass] = useState(['far', 'far', 'far', 'far', 'far'])
    const location = useLocation();
    const addRatingFun = (e) => {
        let newRating = [...starClass]
        for (let i = 0; i < 5; i++) {
            if (rating > i) {
                newRating[i] = 'fas'
            }
            else {
                newRating[i] = 'far'
            }
        }
        setStarClass(newRating)
    }

    useEffect(() => {
        addRatingFun()
    }, [location.pathname])

    return (
        <div className="testimonial">
            <span className="open quote">“</span>
            <div className="testimonial-box">
                <div className="box-top">
                    <div className="profile">
                        <div className="profile-img">
                            <img src={image} />
                        </div>
                        <div className="name-user">
                            <strong>{name}</strong>
                            <span>{email}</span>
                            <span id='reviews-date'>{myDate.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="reviews">
                        {starClass.map((rateno, i) =>
                            <i className={`${rateno} fa-star`}></i>)}
                    </div>
                </div>
                <div className="client-comment">
                    <p>{reviews}</p>
                </div>
            </div>
            <span className="close quote">”</span>
        </div>
    )
}

export default ReviewCard
