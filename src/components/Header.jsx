import { useEffect, useState } from "react"

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() =>{
        const darkModePreference = localStorage.getItem('darkMode') === 'true'
        setIsDarkMode(darkModePreference)
        if (darkModePreference) {
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode
            localStorage.setItem('darkMode', newMode)
            document.documentElement.classList.toggle('dark')
            return newMode
        })
    }

    return (
        <header className="w-fill-available px-[60px] flex justify-between items-center bg-white dark:bg-gray-700 p-6 shadow-md">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Where in the world?</h1>
            <button 
                onClick={toggleDarkMode}
                className="flex items-center text-gray-900 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-4 translate-y-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    )
}

export default Header