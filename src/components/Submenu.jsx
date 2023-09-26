import React, {  useRef, useEffect } from 'react'
// import icon from '../assets/images/icon-calendar.svg'



import { useGlobalContext } from '../context'

const Submenu = () => {

    const { isSubmenuOpen, 
        page: {page, links}, 
        location,} = useGlobalContext();
        

    const container = useRef(null);
    

    useEffect(() => {
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
    }, [page, location, links]);

    

  return (
    <>
        <div className={`${isSubmenuOpen ? "submenu show_submenu" : "submenu"}`}
         ref={container}>

          
           
        
            <div className="submenu_content">
                {links.map((link, index)=>{
                    const {icon, label} = link;
                    // const {icon, label} = link;
                    return (

                        <a  key = {index} className="submenu_item"  href="#"><img src={icon} alt="todo_Icon" />{label}</a>

                    )


                })}
        
           </div>

        </div>
     
    
    </>
  )
}

export default Submenu