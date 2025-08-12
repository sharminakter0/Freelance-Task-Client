import React from 'react';
import { useDarkMode } from './Context/ThemeContext';

const DarkModeToggler = () => {

   const {darkMode,setDarkMode}=useDarkMode();

    return (
        <div>
            <button onClick={()=>setDarkMode(!darkMode)} className="btn transition-all ">{darkMode ? "🔆":"⏾"}</button>
        </div>
    );
};

export default DarkModeToggler;