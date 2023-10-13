import React from 'react'
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './contact.css'

function Contact() {
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;
  
    return (
    <div id='contact' className='main-contact'>
        <div className='contact-div'>
            <h4 className='contact'>
              Contact with US 
            </h4>
            <h5>Address:  
                <span> H-504, Vesu village, Ram Mandir, 393120 Surat, Gujarat  </span></h5> 
            

            
                <h5>
                 Email-:  <span>shailendraahir1998@gmail.com</span>
                  </h5> 
            
        
                <h5 className='phone'> {faPhoneIcon} Phone: <span> 9451214709</span> </h5>
            

        </div>
    </div>
  )
}

export default Contact