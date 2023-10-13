import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  const faBusinessicon = <FontAwesomeIcon icon={faBusinessTime} />;
  const faChartIcon = <FontAwesomeIcon icon={faChartPie} />;
  const faHouselaptopicon = <FontAwesomeIcon icon={faHouseLaptop} />;

  return (
    <section id="about">
      <div className="container">
        <div className="title_headling">
        <h3> We Provides Shortage Remarkable Ideas! </h3>
        
        <p>
          {" "}
          Lorem ipsum is typically a corrupted version of De finibus bonorum et
          malorum, a 1st-century BC text by the Roman
        </p>
        </div>
         
        <div className="about_box_wrapper">
          <div className="about_box">
            <div className="about_icon">{faBusinessicon}</div>
            <div className="about_content">
              <h5>Development</h5>
              <p>
                {" "}
                Lorem ipsum is typically a corrupted version of De finibus
                bonorum et malorum, a 1st-century BC text by the Roman{" "}
              </p>
            </div>
          </div>
          <div className="about_box">
            <div className="about_icon green_icon">{faChartIcon}</div>
            <div className="about_content">
              <h5>Integration</h5>
              <p>
                {" "}
                Lorem ipsum is typically a corrupted version of De finibus
                bonorum et malorum, a 1st-century BC text by the Roman{" "}
              </p>
            </div>
          </div>
          <div className="about_box">
            <div className="about_icon blue_icon">{faHouselaptopicon}</div>
            <div className="about_content">
              <h5>Branding</h5>
              <p>
                {" "}
                Lorem ipsum is typically a corrupted version of De finibus
                bonorum et malorum, a 1st-century BC text by the Roman{" "}
              </p>
            </div>
          </div>
        </div>
       </div> 

    </section>
  );
}

export default About;
