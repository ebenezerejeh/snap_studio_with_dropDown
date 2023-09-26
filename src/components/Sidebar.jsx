import React from 'react'
import closeIcon from '../assets/images/icon-close-menu.svg'
import todoIcon from '../assets/images/icon-todo.svg'
import calenderIcon from '../assets/images/icon-calendar.svg'
import remindersIcon from '../assets/images/icon-reminders.svg'
import planningIcon from '../assets/images/icon-planning.svg'
import iconArrowUp from '../assets/images/icon-arrow-up.svg'

import { useGlobalContext } from '../context'

const Sidebar = () => {

  const { 
    isSidebarOpen, 
    closeSidebar, 
    isDropdownOne, 
    isDropdownTwo, 
    toggleDropDownOne, 
    toggleDropDownTwo, } = useGlobalContext();
  return (
    <>

    
            <div className={ `${isSidebarOpen ? "sidebar_container" : "sidebar_container close_sidebar" }`}>
              <div className="sidebar_main">
                        <div className="sidebar_header">
                            <img  onClick={closeSidebar}  src={closeIcon} alt="close_Icon" />

                        
                        </div>

                        <div className="sidebar_section">
                          <div className="dropdown">
                              <button  className="dropdown_button" onClick={toggleDropDownOne}>Features <img className="header_link_icon" src={iconArrowUp} alt="icon_Arrow_up" /></button>
                              <div className={`${isDropdownOne ? "dropdown_content show-dropdown_content"  :  "dropdown_content"}`}>
                                <a  className="dropdown_item"  href="#"><img src={todoIcon} alt="todo_Icon" />Todo List</a>
                                <a  className="dropdown_item"  href="#"><img src={calenderIcon} alt="calender_Icon" />Calendar</a>
                                <a  className="dropdown_item"  href="#"><img src={remindersIcon} alt="reminders_Icon"/>Reminders</a>
                                <a  className="dropdown_item"  href="#"><img src={planningIcon} alt="planning_Icon" />Planning</a>

                              </div>
                          </div>


                          <div className="dropdown">
                          <button className="dropdown_button button_2" onClick={toggleDropDownTwo}>Company<img className="header_link_icon" src={iconArrowUp} alt="icon_Arrow_up"/></button>
                          <div className={`${isDropdownTwo ?  "dropdown_content show-dropdown_content" : "dropdown_content"}`}>
                            <a  className="dropdown_item"  href="#">History</a>
                            <a  className="dropdown_item"  href="#">Our Team</a>
                            <a  className="dropdown_item"  href="#">Blog</a>

                          </div>

                          </div>

                          <button className="dropdown_button button_2">Careers</button>
                          <button className="dropdown_button">About</button>


                        </div>
                        <div className="sidebar_login_container">
                          <div><button className="sidebar_header_login">Login</button></div>

                          <div><button className="sidebar_header_login login_button2">Register</button></div>
                        </div>


                </div>
            </div>
    
    
    </>
  )
}

export default Sidebar