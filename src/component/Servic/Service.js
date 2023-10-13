import React from 'react'
import AboutImage from "../../images/about_img.jpg";
import './Service.css';    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone,faUserClock , faHouseLaptop} from "@fortawesome/free-solid-svg-icons";

function Service() {
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />;
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const faHouselaptopicon = <FontAwesomeIcon icon={faHouseLaptop} />;
    return (
    <div id='service'>
        <div className="about_box_details">
        <div className="about_col">
        <div className="about_image">
        <img src={AboutImage} alt="about" />
        </div>
        <div className="img_info_box">
        <h6 className="img_info_itle">GET A PRICE QUATE TODAY</h6>
        <p> Lorem ipsum is typically a corrupted version <br></br> of De finibus
                bonorum et maC</p>
   <a href="/">{faPhoneIcon} <span>1-800-654-3210</span> </a>
        </div>

        </div>
        <div className="about_col more_space">
          <h3> We have bussiness skills that will increase yuor earnings</h3>
          <p>Lorem ipsum is typically a corrupted version of De finibus
                bonorum et malorum, a 1st-century BC text by the Roman</p>
                
            <div className="grid_info">
                <div className="icon">{faUserClockIcon}</div>
                <h4>Start your own business in minutes</h4>
                <p>Lorem ipsum is typically a corrupted version of De finibus
                bonorum et malorum, a 1st-century BC text by the Roman</p>

                </div>
                <div className="grid_info">
                <div className="icon green_icon">{faHouselaptopicon}</div>
                <h4>Open a business account online</h4>
                <p>Lorem ipsum is typically a corrupted version of De finibus
                bonorum et malorum, a 1st-century BC text by the Roman</p>

                </div>
        </div>
        

        </div>
    
    </div>
  )
}

export default Service