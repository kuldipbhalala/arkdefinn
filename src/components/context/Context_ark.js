import React, { createContext, useState } from 'react';

const ThemeContext = createContext(null);

const ContextArk = ({ children }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const toggleDropdown = (dropdownName) => {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    
    
    return (

        <ThemeContext.Provider value={{ isMobileMenuOpen, activeDropdown, toggleMobileMenu, toggleDropdown }}>
            <div>{children}</div>
        </ThemeContext.Provider>

    );
};

export { ThemeContext, ContextArk };
