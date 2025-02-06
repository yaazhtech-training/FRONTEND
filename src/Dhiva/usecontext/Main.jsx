import React, { createContext, useState } from 'react';
import Container from './Container';
import User from './User';
import Users from './Users';


// Create context
export const Themecontext = createContext();

const Main = () => {
    const [theme, setTheme] = useState("light");

    // Function to toggle theme between dark and light
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <Themecontext.Provider value={{ theme, toggleTheme }}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1>Main Component</h1>
            <User/>
            <Container/>
            <Users/>
        </Themecontext.Provider>
    );
}

export default Main;
