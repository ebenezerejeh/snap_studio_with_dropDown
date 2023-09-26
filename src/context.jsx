import React, { useState, useContext } from 'react';
import sublinks from './components/data';

const AppContext = React.createContext();



const AppProvider = ({ children }) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOne, setIsDropdownOne ] = useState(false);
    const [isDropdownTwo, setIsDropdownTwo ] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({page: '', links: []});
    
    const [location, setLocation] = useState({});


    const openSidebar = ()=> {
        setIsSidebarOpen(true);
    };

    const closeSidebar = ()=> {
        setIsSidebarOpen(false);
        setIsDropdownOne(false);
        setIsDropdownTwo(false);

    };

    const openSubmenu = (text, coordinates) =>{
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };
    
    

    const closeSubmenu = ()=> {
        setIsSubmenuOpen(false);
        
    }


    const toggleDropDownOne = () => isDropdownOne ? setIsDropdownOne(false) : setIsDropdownOne(true);
    
    
    const toggleDropDownTwo = () => isDropdownTwo ? setIsDropdownTwo(false) : setIsDropdownTwo(true);


        

        
    

    return (
        <AppContext.Provider
        value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            isDropdownOne,
            isDropdownTwo,
            toggleDropDownOne,
            toggleDropDownTwo,
            isSubmenuOpen,
            location,
            page,
            openSubmenu,
            closeSubmenu,
        }}
        >
            {children}

        </AppContext.Provider>

    );


};

export const useGlobalContext = ()=> {
    return useContext(AppContext);

};

export { AppContext, AppProvider };


