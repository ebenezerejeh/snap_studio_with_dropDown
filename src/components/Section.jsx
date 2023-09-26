import React from 'react'
import client_databiz from '../assets/images/client-databiz.svg'
import client_audiophile from '../assets/images/client-audiophile.svg'
import client_meet from '../assets/images/client-meet.svg'
import client_maker from '../assets/images/client-maker.svg'
import { useGlobalContext } from '../context'

const Section = () => {
  const {closeSubmenu} = useGlobalContext()

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains("header_link_item")){
      closeSubmenu();
    }
  }
  return (
    <>

    <div className="section"  onMouseOver={handleSubmenu}>

              <div className="section_image"> </div>


              <div className="section_text">
                <div className="section_head_text"> 
                  <h1>Make remote work</h1>
                </div>

                <div className="section_body_text">  
                    <p>
                      Get your team in sync, no matter your location. Streamline processes,
                      create team rituals, and watch productivity soar.
                    </p>
                  </div>

                  <div className="section_button">
                    <button>
                      Learn more
                    </button> 
                </div>

                  <div className="section_footer"> 
                    <ul>
                      <li className="client_logo"><img className="img1" src={client_databiz} alt="databiz_logo"/></li>
                      <li className="client_logo"><img className="img2" src={client_audiophile} alt="audiophile_logo"/></li>
                      <li className="client_logo"><img className="img3" src={client_meet} alt="meet_logo"/></li>
                      <li className="client_logo"><img className="img4" src={client_maker} alt="maker_logo"/></li>
                      <li className="client_logo"><img className="img1" src={client_databiz} alt="databiz_logo"/></li>
                      <li className="client_logo"><img className="img2" src={client_audiophile} alt="audiophile_logo"/></li>
                      <li className="client_logo"><img className="img3" src={client_meet} alt="meet_logo"/></li>
                      <li className="client_logo"><img className="img4" src={client_maker} alt="maker_logo"/></li>
                      <li className="client_logo"><img className="img1" src={client_databiz} alt="databiz_logo"/></li>
                      <li className="client_logo"><img className="img2" src={client_audiophile} alt="audiophile_logo"/></li>
                      <li className="client_logo"><img className="img3" src={client_meet} alt="meet_logo"/></li>
                      <li className="client_logo"><img className="img4" src={client_maker} alt="maker_logo"/></li>
                      <li className="client_logo"><img className="img1" src={client_databiz} alt="databiz_logo"/></li>
                      <li className="client_logo"><img className="img2" src={client_audiophile} alt="audiophile_logo"/></li>
                      <li className="client_logo"><img className="img3" src={client_meet} alt="meet_logo"/></li>
                      <li className="client_logo"><img className="img4" src={client_maker} alt="maker_logo"/></li>


                    </ul>
                    
                  
                  
                  </div>





                
              </div>





      </div>

  
  
  

  

  

  
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">ebenezer_ejeh</a>.
  </div>

    
    
    
    </>
  )
}

export default Section