import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-left bg-footer">
        <div className="row justify-content-start ftr-top-row-pad">
          <div className="col-md-3 quiq-links-footer-mb-st">
            <h5 className="footer-title-simple">COURSES</h5>
            <ul className="main-menu-footer-mn ">
              <li>
                {" "}
                <a>Free Intraday Class</a>
              </li>
              <li>
                {" "}
                <a> Diploma in Technical Analysis</a>
              </li>
              <li>
                {" "}
                <a> Timing The Trade</a>
              </li>
              <li>
                {" "}
                <a>Pure Profit Course</a>
              </li>
            </ul>
            {/* <FaHeart /> */}
            {/* <FaRegHeart />   */}
            {/* <ArrowRight color="royalred" size={25} /> */}
          </div>

          <div className="col-md-3 quiq-links-footer-mb-st">
            <h5 className="footer-title-simple">USEFUL DETAILS</h5>
            <ul className="main-menu-footer-mn">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>Online Payment</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 quiq-links-footer-mb-st" zn_id="33">
            <h5 className="footer-title-simple" zn_id="102">
              FREE RESOURCE
            </h5>
            <ul className="main-menu-footer-mn" zn_id="85">
              <li zn_id="86">
                <a>Free Class</a>
              </li>
              <li zn_id="87">
                <a>Free Education</a>
              </li>
              <li zn_id="88">
                <a>Risk Management</a>
              </li>
              <li zn_id="89">
                <a>Day Trading Tips</a>
              </li>
              <li zn_id="90">
                <a>NSE</a>
              </li>
              <li zn_id="91">
                <a>BSE</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3" zn_id="24">
            <h5 className="footer-title-simple" zn_id="25">
              CONTACT
            </h5>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.832 2.688A4.056 4.056 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.056 4.056 0 0 0-1.188-2.812zM7.925 2.5l.082.01.074-.01a3.075 3.075 0 0 1 2.941 3.037 2.74 2.74 0 0 1-.467 1.568l-.02.034-.017.035L8 12.279l-2.517-5.1-.017-.039-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663 1 1 0 0 0 1.112-1.663zM6.87 3.837a2 2 0 1 1 2.22 3.326 2 2 0 0 1-2.22-3.326z"
              />
            </svg>
            <a
              className="footer-contact-a-hm"
              href="https://www.google.com/maps/place/Laxmi+Net+Cafe/@19.8470356,75.2429297,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdb9bd41076e67b:0x14331d5d4f51e716!8m2!3d19.8470356!4d75.2429297!16s%2Fg%2F11c0rm_yrz?hl=en&entry=ttu"
              target="_blank"
              zn_id="26"
            >
              <i class="fas fa-map-marker-alt" zn_id="29"></i> Laxmi Net Cafe,
              Wadgaon Corner, Mohtadevi chowk, Bajajnagar, Chatrapati
              SambhajiNagar(Aurangabad),Maharashtra, India.
            </a>
            <br></br>
            <AiFillPhone />
            <a
              className="footer-contact-a-hm"
              href="tel:+9197247 95247"
              zn_id="27"
            >
              <i class="fas fa-phone" zn_id="37"></i> +91 9284648123
            </a>
            <br></br>
            <AiFillMail />{" "}
            <a
              className="footer-contact-a-hm"
              href="mailto:contact@niftytradingacademy.com"
              zn_id="28"
            >
              <i class="fas fa-envelope" zn_id="38"></i>{" "}
              vijaystockrunner@gmail.com
            </a>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 text-center text-md-left">
            <p className="copyright-footer-p">
              © 2023 Vijay Stock Runner Academy | Terms and condition
              @vjstockrunner
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
