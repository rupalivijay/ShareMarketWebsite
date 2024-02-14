import React from "react";
import s3 from "../src/Images/s2.svg";
import cource1 from "../src/Images/2011-icon.webp";


const Cource = () => {
  return (
    <>

      <section className=" p-2">
                <main className="  headline-title mb-auto">
                    <br></br><br></br>
                    <h5><span className="blok-on-freeclass">Free Stock Market Class</span></h5>
                    <br></br> <br></br>
                    <center><h3><span className="blok-on-freeclass">We are in the business since 2010</span></h3></center>
                    <br></br>
                </main>
            </section>


            <br></br> <br></br><br></br>
            <div className="container">
                <div className="bcol-10 mx-auto" data-aos="fade-down" data-aos-delay="100">
                    <center><h2 className="col-10 mx-auto mb-1">Our Professional Stock Market Courses </h2></center>  <br></br>
                    <p>Take a look at all the available stock trading courses in India curated by Vijay Stockrunner Trading Academy for beginners, investors, and traders of India. </p>
                    <p>You'll learn something from our shows, whether you're brand new to investing or a seasoned veteran on the hunt for fresh ideas and advice. You can be sure that you will acquire the knowledge and abilities essential to thrive in this competitive field with the help of high-quality, interactive online courses and in-person classroom training.</p>
                </div><br></br> <br></br>
                
                <div className="row courses-wrap-main">
                    <div className="col-lg-3 col-xs-12 col-sm-6 mb-3">
                        <div className="courses-section-new yellow-bg bg-1">
                            <h3 className="">Free Intraday Course tricks</h3>
                            <div className="course-img"><img src={cource1} alt="logo" loading="lazy" /></div>
                            <a href="/freeclass" className="btn btn-primary-grad-course"> EXPLORE </a> </div>
                    </div>

                    <div className="col-lg-3 col-xs-12 col-sm-6 mb-3">
                        <div className="courses-section-new yellow-bg bg-1">
                            <h3 className=""> Foundamental Analysis</h3>
                            <div className="course-img"><img src={cource1} alt="logo" loading="lazy" /></div>
                            <a href="/freeclass" className="btn btn-primary-grad-course"> EXPLORE </a> </div>
                    </div>

                    <div className="col-lg-3 col-xs-12 col-sm-6 mb-3">
                        <div className="courses-section-new yellow-bg bg-1">
                            <h3 className="">Diploma in Technical Analysis</h3>
                            <div className="course-img"><img src={cource1} alt="logo" loading="lazy" /></div>
                            <a href="/freeclass" className="btn btn-primary-grad-course"> EXPLORE </a> </div>
                    </div>

                    <div className="col-lg-3 col-xs-12 col-sm-6 mb-3">
                        <div className="courses-section-new bg-1">
                            <h3 className="">Best Timing To The Trade</h3>
                            <div className="course-img"><img src={cource1} alt="logo" loading="lazy" /></div>
                            <a href="freeclassp" className="btn btn-primary-grad-course">EXPLORE</a> </div>
                    </div>

                    <br></br>
                    <br></br>

                    <div className="col-lg-3 col-xs-12 col-sm-6 mb-3">
                        <div className="courses-section-new orange-bg bg-1">
                            <h3 className=""><span>Best Selling Course</span></h3>
                            <div className="course-img"><img  src={cource1} alt="logo" /></div>
                            <a href="best-technical-analysis-course.php" className="btn btn-primary-grad-course"> EXPLORE </a> </div>
                    </div>

                    <div className="col-lg-3 col-xs-12 col-sm-6 mb-3">
                        <div className="courses-section-new red-bg bg-1">
                            <h3 className="">Pure Profit Course</h3>
                            <div class="course-img"><img src={cource1} alt="logo" /></div>
                            <a href="stock-market-software-with-training.php" class="btn btn-primary-grad-course"> EXPLORE </a> </div>
                    </div>

                </div>
            </div>

        
      
    </>
  );
}

export default Cource;