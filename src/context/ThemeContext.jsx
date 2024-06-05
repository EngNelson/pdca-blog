"use client"

import { createContext, useContext, useState } from "react";

export default ThemeContext = createContext()

const getFromLocalStorage = ()=>{

    const {theme} = useContext(ThemeContext)

    if(typeof window !==undefined){
    const value = localStorage.getItem("theme")
    return value || "light";
    }
};

export const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState(()=>{
        return getFromLocalStorage()
    });

    return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>;
}