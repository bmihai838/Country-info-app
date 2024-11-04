import { useState, useEffect } from 'react';

const Filter = ({ region }) => {
     const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains("dark"));

     useEffect(() => {
         const handleThemeChange = () => {
             setIsDarkMode(document.documentElement.classList.contains("dark"));
         };
 
         const observer = new MutationObserver(handleThemeChange);
         observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
 
         return () => observer.disconnect();
     }, []);

    const arrowColor = isDarkMode ? '%23E5E7EB' : '%23374151'

    return (
        <div>
            <select
                {...region.inputProps}
                className="p-3 mt-4 pr-10 border rounded-md shadow-md mb-4 dark:text-gray-200 dark:bg-gray-700 dark:border-gray-700 appearance-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' %3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' stroke='${arrowColor}' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 1rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1rem',
                }}
            >
                <option value="" disabled hidden>Filter by Region</option>
                <option value="">All regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter