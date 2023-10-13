import React from "react";
import "./Home.css";
import banner_img from '../../images/banner-img.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faShieldHalved, faChartArea } from "@fortawesome/free-solid-svg-icons";
function Home() {
    //Icons
  const faChartIcon = <FontAwesomeIcon icon={faChartLine}/>
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved}/>
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea}/>
return (
    <>
      <section id="home">
      <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">
                {" "}
                WE PROMOTE YOUR  <span className="busines">BUSSINESS</span> </h3>
              
              <p>
                {" "}
                Lorem ipsum is typically a corrupted version of De finibus
                bonorum et malorum, a 1st-century BC text by the Roman,
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  {" "}
                  Get Started{" "}
                </a>
              </div>
            </div>
            <div className="col">
          <div className="sub_banner_image">
           <img src={banner_img} alt="Banner_img"/>

          </div>
            <div className="banner_style1">
                {faChartIcon}
                <h4>Bussiness Analysis</h4>
            </div>
            <div className="banner_style1 banner_style2">
                {faShieldIcon}
                <h4>95.9% Success</h4>
            </div>
            <div className="banner_style1 banner_style3">
                {faChartAreaIcon}
                <h4>Strategy</h4>
            </div>
          </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
