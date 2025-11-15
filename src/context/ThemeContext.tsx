import { createContext, useState } from "react";

export const ThemeContext = createContext('light')

interface ThemeContextProps {
    children :React.ReactNode
}

export function ThemeProvider({children}:ThemeContextProps ) {
    //state data
    const [theme, setTheme] = useState('light');

    //action


    return (
        <ThemeContext value={{theme, setTheme}}>
            {children}
            {/* --> goes to switch component
            <button
            type=""
            onClick={(e) => {
                setTheme(e.)
            }}
            ></button> */}
        </ThemeContext>
    )


}