import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import s1 from "../src/Images/s3.svg";
import s2 from "../src/Images/s1.svg";
import s3 from "../src/Images/s2.svg";
 
const Service = () => {
  return (
    <>
      <section class="first-items-home bg-polygone-grey-pad-120-top">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-8 mb-5">
              <div
                class="basic-page basic-page-big text-center aos-init aos-animate"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <h1>Most Trusted Stock Market Training Institute </h1>
                <br></br>
                <p>
                  Here’s the top stock market training to help you advance in
                  your financial career:
                </p>
                <p class="text-center font-pt-sans">
                  {" "}
                  In 2015, NTA® received the "Student Appreciation Award" from
                  UrbanPro for being the most sought-after online share market
                  training institute for taking advantage of free stock trade
                  lessons.
                </p>
                <p class="text-center font-pt-sans">
                  {" "}
                  Nifty Trading Academy is ISO 9001:2015 accredited, and our
                  share market courses provide investors all over the world with
                  superior education and cutting-edge training in intraday
                  trading and technical analysis.
                </p>
                <p class="text-center font-pt-sans">
                  In 2016, Nifty Trading Academy was recognized as India's "
                  <strong>Best Stock Market Training Institute</strong>" thanks
                  to the effective training methods and practical applications
                  it taught its students.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container col-sm-8 d-flex  flex-xs-column">
          <div className="px-4">
            <img src={s1} alt="live-icon" class="certimg" />
            <h2 className="text-center">Live F&amp;O Trade Class</h2>
            <p className="text-center">
              We provide the best online live sessions on future and options
              trading. NTA® online Stock Market Course includes query
              discussions and various engagement sessions.
            </p>
          </div>
          <div className="px-4">
            <img src={s2} alt="live-icon" class="certimg" />
            <h2 className="text-center">100% Money Back Guarantee*</h2>
            <p className="text-center">
              Nifty Trading Academy is the only online share market training
              class that guarantees you excellence in stock market trading or a
              100% money-back facility.
            </p>
          </div>
          <div className="px-4">
            <img src={s3} alt="live-icon" class="certimg" />
            <h2 className="text-center">Lifetime Membership</h2>
            <p className="text-center">
              Provides students with the facility to repeat the course freely.
              Our team helps you build confidence in stock market investment.
              Join us to become financially independent.
            </p>
          </div>
          <div class="disabled">
            <div class="owl-prev"></div>
            <div class="owl-next"></div>
          </div>
          <div class="owl-dots">
            <div class="owl-dot">
              <span></span>
            </div>
            <div class="owl-dot active">
              <span></span>
            </div>
          </div>
        </div>
      </section>
 
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fuild mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Service;
 
