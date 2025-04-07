import React, { useState } from 'react'
import { stateContext } from './stateContext';

const StateProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');
    const lightMode = () => setTheme('light');
    const darkMode = () => setTheme('dark');


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <stateContext.Provider value={{ theme, lightMode, darkMode, open, handleOpen, handleClose }}>
            {children}
        </stateContext.Provider>
    )
}

export default StateProvider
