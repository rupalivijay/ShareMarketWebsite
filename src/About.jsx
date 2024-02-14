import React from "react";
import web from "../src/Images/img.png";
import a1 from "../src/Images/sr1.jpeg";
import rating from "../src/Images/rating-star1.jpg";
import image from "../src/Images/12-years-unstoppable.svg";
import { NavLink } from "react-router-dom";
import { Sliders } from "react-bootstrap-icons";

const About = () => {
    return (
        <>

            <section className=" p-2">
                <main className=" headline-title mb-auto">
                    <br></br><br></br>
                    <h5><marquee direction="left"><span className="blok-on-freeclass">Free Stock Market Class</span></marquee ></h5>
                    <br></br> <br></br>
                    <Sliders>  <center><h5><span className="">Home/ About</span></h5></center>
</Sliders>
                    <center><h5><span className="">Home/ About</span></h5></center>
                    <br></br>
                </main>
            </section>

            <section id="header" className="d-fles align-items-center">
                <div className="container-fuild nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fulid animated" alt="home jpg" />
                                </div>
                                
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                    <h1 className="col-12 mx-auto mb-1">Welcome to about page <strong className="brand-name">Vijay Bhosale</strong></h1>
                                    <p className=" col-12 mx-auto my-3">The stock market broadly refers to the collection of exchanges and other venues where the buying, selling, and issuance of shares of publicly held companies take place. Such financial activities are conducted through institutionalized formal exchanges (whether physical or electronic) or via over-the-counter (OTC) marketplaces that operate under a defined set of regulations. </p>
                                    <div className="mt-3">
                                        <NavLink to="/contact" className="btn btn-get-started">Contact Now </NavLink>
                                    </div>
                                </div>

                            </div>
                            <br></br>
                            <br></br>
                            <div class="container">
                                <div>
                                    <div class=" mb-5">
                                        <h2 className="col-10 mx-auto mb-1">Welcome to the Most Trusted Stock Market Institute</h2></div>
                                    <p>Vijay Stock Runner Academy is a renowned share market training institute located in Chatrapati Shambajinagar, Maharashtra. Our academy started with a simple dream of imparting knowledge about stock trading to beginners by Mr Vijay Bhosale. After being a successful trader, he started this academy to follow his passion towards becoming a successful trader. Today with more than 1000+ learners he aims to make every student a successful trader.<br></br>
                                        We endeavor to assist you with meeting your monetary objectives with a complete educational plan. Our courses are intended to cover a range of interactive courses and in-depth course material including Swing Trading, Short Term Trading, Position Trading, and Investment Theory for Stocks, Futures &amp; Options.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br></br><br></br><br></br><br></br><br></br><br></br>

            <br></br><br></br><br></br>
            <section class="perlex-efect-section parallax-window bg-success-2 success-block-wrap">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-md-12 mb-5">
                            <div class="basic-page mb-4 text-center basic-page-big aos-init aos-animate" data-aos="fade-down" data-aos-delay="100">
                                <h2 class="text-white">Know the Experience of VTA<sup class="sup-slider-2">®</sup></h2>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div id="" class="owl-carousel success-carousel row-eq-height pt-2 pb-2 owl-loaded owl-drag">
                                <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item" ><div>

                                    <div class="success-block">
                                        <h3 id="counter"><span class="counter-value" data-count="12">12+</span></h3>
                                        <h4>Years of Success </h4>
                                        <p>For the past 12 years, Vijay Stock Runner Trading Academy has produced fantastic results, and our success story continues with the best staff and a great learning environment.</p>
                                    </div>

                                </div></div><div class="owl-item" ><div>

                                    <div class="success-block">
                                        <h3 id="counter"><span class="counter-value" data-count="50000">1000+</span></h3>
                                        <h4>Learners</h4>
                                        <p>Our stock market course has made lives better for many students, who can now proudly spend freely and wisely, we have positively impacted more than 2000 lives.</p>
                                    </div>
                                </div></div><div class="owl-item active" ><div>

                                    <div class="success-block">
                                        <h3 id="counter"><span class="counter-value" data-count="100">100+</span></h3>
                                        <h4>In-House Strategies</h4>
                                        <p>Our share market courses are tailored to the needs of the learner. Everything is provided by NTA®, from fundamental information to advanced intraday trading.</p>
                                    </div>
                                </div></div><div class="owl-item active" ><div>

                                    <div class="success-block">
                                        <h3 id="counter"><span class="counter-value" data-count="96">80%</span></h3>
                                        <h4>Client Retention</h4>
                                        <p>Our ability to retain over 96% of clients shows our client's satisfaction with our stock market training. We’ve been successful in our mission to educate people on stock trading.</p>
                                    </div>
                                </div></div></div></div><div class="owl-nav disabled"><div class="owl-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div><div class="owl-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div></div><div class="owl-dots disabled"></div></div>
                        </div>

                    </div>
                </div>
            </section>

            <br></br><br></br><br></br><br></br><br></br>
            <section class="rating-block-home">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-10">
                            <div class="basic-page basic-page-big aos-init text-center aos-animate" data-aos="fade-down" data-aos-delay="100">
                                <h2 className="col-10 mx-auto mb-1">Why Choose Only &amp; Only VTA<sup class="sup-slider-2">®</sup>?</h2>
                            </div>
                        </div><br></br><br></br>

                        <div class="col-md-10 pt-3  ">
                            <ul>
                                <li>We offer professional share market certificate programs to students.</li>
                                <li>Our mission is to provide comprehensive course material that is both engaging and relevant to a wide range of students, whether they have a background in finance or not.</li>
                                <li>Nifty Trading Academy will teach you how to trade stocks successfully while keeping your emotions in check.</li>
                                <li>Regular assessments are conducted throughout the instructional process.</li>
                                <li>Awarding pupils with certificates of achievement is a great way to support them in their future careers. </li>
                                <li>Our courses are well-known for their low costs and high rewards. Your financial commitment to us is greatly appreciated.</li>
                                <li>With NTA®, you can learn the basics of the stock market whenever and wherever you like. </li>
                                <li>Learn from from our share market courses and hone your stock market trading abilities. </li>
                                <li>Nifty Trading Academy hosted a stock market webinar that attracted a record number of attendees. </li>
                                <li>Our stock marketing classes focus mostly on trading fundamentals, technical analysis, and simple risk management techniques for newcomers.</li>
                                <li>Our courses offer practical course material, career advice, hands-on instruction, and round-the-clock support via emails and toll-free phones.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="third-items-home bg-polygone-height">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="basic-page text-center basic-page-big aos-init aos-animate" data-aos="fade-down" data-aos-delay="100">
                                <h2 className="col-10 mx-auto mb-1">Success in Real Word</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-left align-items-center mb-4">
                        <div class="col-md-12">
                            <div id="" class="">
                                <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item " ><div>
                                    <div class="gallery-block">
                                        <img src={a1} loading="lazy" />
                                    </div>
                                </div></div><div class="owl-item " ><div>

                                    <div class="gallery-block">
                                        <img src={a1} loading="lazy" />
                                    </div>
                                </div></div><div class="owl-item " ><div>

                                    <div class="gallery-block">
                                        <img src={a1} loading="lazy" />
                                    </div>
                                </div></div><div class="owl-item " ><div>

                                    <div class="gallery-block">
                                        <img src={a1} loading="lazy" />
                                    </div>
                                </div></div></div></div><div class="owl-nav disabled"><div class="owl-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div><div class="owl-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div></div><div class="owl-dots"><div class="owl-dot"><span></span></div><div class="owl-dot"><span></span></div><div class="owl-dot active"><span></span></div></div></div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center col-10 mx-auto mb-1" >
                                <h2 className="col-10 mx-auto mb-1">Testimonials</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-left align-items-center">
                        <div class="col-md-12">
                            <div id="" class="owl-carousel testi-carousel row-eq-height pt-2 pb-2 owl-loaded owl-drag">
                                <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item cloned" ><div class="article-items">
                                    <div class="testimonial-block">
                                        <div><img src={rating}/></div>
                                        <p>Dear Sir, I found your explanation to be very good . But, since I am a complete newbie , It was somewhat difficult for me to follow your session at some point. Otherwise , I thoroughly enjoyed your teaching.</p>
                                        <div> <h4>-Tejas Thorat</h4></div>
                                    </div>
                                </div></div><div class="owl-item cloned" ><div class="article-items">

                                    <div class="testimonial-block">
                                    <div><img src={rating}/></div>
                                        <p>Dear Vijay, An awesome place to learn share marketing and earn a lot. This training place is very good as the employees are very friendly and we can know where to invest and earn money.</p>
                                        <div> <h4>-CA Sagar Patil</h4></div>
                                    </div>
                                </div></div><div class="owl-item cloned" ><div class="article-items">

                                    <div class="testimonial-block">
                                    <div><img src={rating}/></div>
                                        <p>My friend suggested me about this academy..and this is best trading academy in surat. they teach very nice and after teaching they help a lot. I'm earning a good handsome amount after taking training from here.</p>
                                        <div> <h4>-Narendra Belkar</h4></div>
                                    </div>
                                </div></div><div class="owl-item" ><div class="article-items">

                                    <div class="testimonial-block">
                                    <div><img src={rating}/></div>
                                        <p>I am deeply impressed with the knowledge of  market and must say I have never come across such a knowledgeable person like him in last 10+ years I spent in the Capital Market. His simple, lucid and most effective way of explaining details of complex Technical Analysis is so easy to understand for a novice like me. </p>
                                        <div class="footer-txt"> <h4>-Amit Sarvade</h4></div>
                                    </div>           
                                    
                                </div></div></div></div><div class="owl-nav disabled"><div class="owl-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div><div class="owl-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div></div><div class="owl-dots"><div class="owl-dot"><span></span></div><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div></div></div>
                        </div>
                    </div>
                </div>
            </section>

            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div class="row justify-content-center align-items-center">
                <div class="col-md-7 col-lg-7">
                    <div class="basic-page  text-center basic-page-big  mb-5">
                        <h2 className="col-10 mx-auto mb-1">Journey of Inception</h2>
                        <img src={image} alt="" class="unstoppable-img" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;