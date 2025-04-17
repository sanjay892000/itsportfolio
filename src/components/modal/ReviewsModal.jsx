import React, { useState } from 'react';
import './reviewmodal.css';
import Modal from '@mui/material/Modal';
import { useStateContext } from '../../contextapi/stateContext';
function ReviewsModal() {

    const { open, handleClose } = useStateContext();
    const [review, setReview] = useState({ name: "", email: "", feedback: "" })
    const [star, setStar] = useState(0)
    const [starClass, setStarClass] = useState(['far', 'far', 'far', 'far', 'far'])
    const addRatingFun = (e) => {
        let ratingNum = Number(e.target.id)
        let newRating = [...starClass]
        console.log(newRating)
        for (let i = 0; i < 5; i++) {
            if (ratingNum >= i) {
                newRating[i] = 'fas'
            }
            else {
                newRating[i] = 'far'
            }
        }
        setStarClass(newRating)
        setStar(ratingNum + 1)
    }

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(review, star)
        
    }

    return (
        <Modal
            id="mymodal"
            aria-abelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            closeAfterTransition
        >
            <div className="modal-container">
                <div className="close-modal" onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
                <h1 className="feedback-title"> Tell us what you think</h1>
                <p className="">Hey! Students Please share your thoughts & experiences.</p>

                <div className="add-reviews-container">
                    <form className="form-group" onSubmit={handleSubmit}>
                        <input className="form-control" type="text" placeholder="Name" name="name" onChange={handleChange} required />
                        <input className="form-control" type="text" name='email' placeholder="Email" onChange={handleChange} required />
                        <textarea id="fb-comment" rows={3} name='feedback' className="form-control" placeholder="Tell us what you think" onChange={handleChange} required></textarea>
                        <div className="add-rating">
                            {starClass.map((rating, i) => <i key={i} id={i} className={`${rating} fa-star`} onClick={addRatingFun} ></i>)}
                        </div>
                        <button type="submit" className="form-control btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default ReviewsModal
