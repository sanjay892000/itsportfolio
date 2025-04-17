import React from 'react'
import './reviewcard.css'
function ReviewCard(props) {

    const {name, reviews, image, rating, date, email} = props
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
                            <span id='reviews-date'>02/03/2025 12:25</span>
                        </div>
                    </div>
                    <div className="reviews">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
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
