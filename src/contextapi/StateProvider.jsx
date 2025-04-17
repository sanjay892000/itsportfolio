import React, { useState } from 'react'
import { stateContext } from './stateContext';
import { localHostUrls } from '../BaseURLS.js';

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
        const response = await fetch(`${localHostUrls}/api/reviews/getreviews`)
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

    return (
        <stateContext.Provider value={{ theme, lightMode, darkMode, open, handleOpen, handleClose, fetchReviewsData, slides }}>
            {children}
        </stateContext.Provider>
    )
}

export default StateProvider
