import React, { useState } from 'react'
import { stateContext } from './stateContext';
import { baseUrls } from '../BaseURLS.js';

const StateProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');
    const lightMode = () => setTheme('light');
    const darkMode = () => setTheme('dark');


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const slide = []
    const [slides, setSlides] = useState(slide);
    
    const fetchReviewsData = async () => {
        const response = await fetch(`${baseUrls}/api/reviews/getreviews`)
        const data = await response.json()
        console.log(data)
        if (data.success) {
            console.log('Reviews fetched successfully')
            setSlides(data.reviews)
        }
        else {
            console.log('Error fetching reviews')
        }
    }

    const addReviewsData = async(review, star)=>{
        const response = await fetch(`${baseUrls}/api/reviews/addreviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ ...review, rating: star })
        })
        const data = await response.json()
        console.log(data)
        if (data.success) {
            setSlides([...slides, data.reviews])
            console.log('Review added successfully')
            handleClose()
        }
        else {
            console.log('Error adding review')
        }
    }

    const contactFun = async(contact)=>{
        console.log(contact)
        const response = await fetch(`${baseUrls}/api/contact/sendmessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact)
        })
        const data = await response.json()
        console.log(data)
        if (data.success) {
            console.log('Contact message sent successfully')
        }
        else {
            console.log('Error sending contact message')
        }
    }

    return (
        <stateContext.Provider value={{ theme, lightMode, darkMode, open, handleOpen, handleClose, addReviewsData, contactFun, fetchReviewsData, slides }}>
            {children}
        </stateContext.Provider>
    )
}

export default StateProvider
