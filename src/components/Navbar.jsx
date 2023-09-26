import React from 'react'
import headerLogo from '../assets/images/logo.svg'
import headerHam from '../assets/images/icon-menu.svg'
import iconArrowUp from '../assets/images/icon-arrow-up.svg'

import { useGlobalContext } from '../context'

const Navbar = () => {


  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  
  const displaySubmenu = (e) => {
    console.log(e.target.textContent);
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom;
    openSubmenu(page, {center, bottom});
  };

  

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains("header_link_item")){
      closeSubmenu();
    }
  }

  






  return (
    <>

    <div className="header"  onMouseOver={handleSubmenu} >

            <div className="header_logo">
              <img src={headerLogo}  alt="header_logo"/>
            </div>

            <div className="header_ham"> 
              <img onClick={openSidebar} src={headerHam} alt ="header_ham" />

              
            </div>
            
            <div className="header_link">
              
              <ul>
              <li className="header_link_item link_item_one" onMouseOver={displaySubmenu}>Features</li>
              <li className="header_link_item  link_item_two"  onMouseOver={displaySubmenu}>Company</li>
              <li className="header_link_item"> Careers </li>
              <li className="header_link_item"> About </li>


              {/* <img className="header_link_icon" src={iconArrowUp} alt="icon_Arrow_Up" />  
<img className="header_link_icon" src={iconArrowUp} alt="icon_Arrow_Up"/> */}

              </ul>

          
            </div>

            

            <div className="header_login">
              <ul>
                <li className="header_login_link">Login</li>
                <li className="header_login_link link_2">Register</li>


              </ul>
            </div>




      </div>

    
    
    
    
    </>
  )
}

export default Navbar