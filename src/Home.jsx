import React from "react";
import web1 from "../src/Images/img.png";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>

       <marquee><h1>Happy valentine day Dear Khadus</h1></marquee> 
            <section id="header" className="d-fles align-items-center">
                <div className="container-fuild ">
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <div className="row">
                                <div className="col-md-6 justify-content-center ">
                                    <h1 className="col-12 mx-auto mb-1">Grow your Knowldge with  <strong className="brand-name">Vijay Bhosale</strong></h1><br></br><br></br>
                                    <p className="col-12 mx-auto">The stock market broadly refers to the collection of exchanges and other venues where the buying, selling, and issuance of shares of publicly held companies take place. Such financial activities are conducted through institutionalized formal exchanges (whether physical or electronic) or via over-the-counter (OTC) marketplaces that operate under a defined set of regulations. </p><br></br>
                                    <div className="mt-6">
                                        <NavLink to="/freeclass" className="btn btn-get-started">Get started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web1} className="img-fulid animated" alt="home jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
            </section>

            <br></br><br></br><br></br> <br></br>
            <center><h2 className="col-10 mx-auto mb-1">Join the Best Online &amp; Offline Stock Market Course for Beginners and Trading Professionals</h2> </center><br></br>
            <p className="col-10 mx-auto" >Our Academy provides a superb platform with its Stock Market Training program where everyone can study Intraday &amp; Technical Analysis, and also learn about the Indian stock market. Our Academy provides a superb platform with its Stock Market Training program where everyone can study Intraday &amp; Technical Analysis, and also learn about the Indian stock market. </p>
            <p className="col-10 mx-auto" >If you want to start in the world of stock trading then there is no better place than VTA® a reputed stock market training institute. With our Share Market Training in Maharashtra, you will receive professional counseling and direction on how to navigate the complicated world of financial investments. Our Stock Market Course offers a thorough program that covers everything from fundamental financial principles to cutting-edge trading tactics, with both online and classroom education options.</p>
            <p className="col-10 mx-auto" >Our programs have something for everyone, whether you are merely interested in the stock market or a seasoned investor searching for fresh ideas and advice. You can be confident that you will acquire the knowledge and skills required for success in this cutthroat industry through top-notch interactive online courses and practical classroom training.</p>

            <div className="mt-3">
                <center><NavLink to="/freeclass" className="btn">Get a Free Class Today</NavLink></center>
            </div>

        </>

    );


}


export default Home;