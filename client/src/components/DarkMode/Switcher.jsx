import React, { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSide from './useDarkSide'

const Switcher = () => {
    const [colorTheme, setTheme] = useDarkSide()
    const [darkSide, setDarkSide] = useState(colorTheme === 'dark')

    const toggleDarkMode = () => {
        setTheme(colorTheme)
        setDarkSide(!darkSide)
    }

    return (
        <div className='flex items-center'>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={24}
                sunColor="#FDB813"
                moonColor="#1C1C1C"
                className="transition-colors duration-300"
            />
        </div>
    )
}

export default Switcher
