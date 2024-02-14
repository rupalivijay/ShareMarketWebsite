import React from "react";
import fredemo from "../src/Images/logo-single.svg";

const Freeclass = () => {
    return (
        <>
            <section className=" p-2">
                <main className="  headline-title mb-auto">
                    <br></br><br></br>
                    <h5><span className="blok-on-freeclass">Free Stock Market Class</span></h5>
                    <br></br> <br></br>
                    <center><h3>We are in the business since 2010</h3></center>
                    <br></br>
                </main>
            </section>

            <section class="padding-130-0-160 ">
                <div class="section-top-right-corner-big"></div>
                <div class="section-top-left-side-1"></div>
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-md-6">
                            <div class="row row-eq-height form-contain-home form-right-content">

                                <h5 class="w-100 mb-2 text-center">Register for Free Stock Market Class</h5><br></br>
                                <p class="mb-3 text-center">Fill This Form To Enter in Free Stock Market Class</p>
                                <form class="row justify-content-start">
                                <br></br>
                                    <div id="form-messages"></div>

                                    <div class="col-md-6">
                                        <div class="field input-field">
                                            <input class="form-contain-home-input" type="text" name="name" placeholder = " Full Name" required="" fdprocessedid="n91dbi" />
                                        </div>
                                    </div>
                                  
                                    <div class="col-md-6">
                                        <div class="field input-field">
                                            <input class="form-contain-home-input" type="email" name="email" placeholder="Email Address" required="" fdprocessedid="xyey8h" />
                                        </div>
                                    </div> <br></br><br></br>

                                    <div class="col-md-6">
                                        <div class="field input-field">
                                            <input class="form-contain-home-input" type="text" name="phone" placeholder="Phone No." required="" fdprocessedid="3f8w45" />
                                        </div>
                                    </div> 

                                    <div class="col-md-6">
                                        <div class="field input-field">
                                            <input class="form-contain-home-input" type="text" name="city" placeholder="City" required="" fdprocessedid="dtb4w" />
                                        </div>
                                    </div> <br></br><br></br>

                                    <div class="col-md-12">
                                        <div class="field input-field">
                                            <textarea class="form-contain-home-input" type="text" placeholder="Message" name="message" required=""></textarea>
                                        </div>
                                    </div> <br></br>

                                    <div class="col-md-12 mt-3 text-center">
                                        <div class="successmsg"></div>
                                        <div class="btn-holder-contect ">
                                            <button type="submit" name="freeLiveDemo" value="submit" class="btn btn-primary-grad" fdprocessedid="cfkac97">Submit</button>
                                        </div>
                                    </div> 
                                    
                                    <br></br>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                                <h4 class="w-100 text-center ">Benefit Of Stock Market Free Class</h4>
                                <ul class="pl-5 mt-5">
                                    <li>Learn how to make money in stock market</li>
                                    <li>Instructor Q&amp;A</li>
                                    <li>Instructor direct message</li>
                                    <li>Taught by industry leaders &amp; working professionals</li>
                                    <li>Reach your financial goals</li>
                                    <li>Build real wealth</li>
                                    <li>Set the right trading strategies</li>
                                    <li>Reduce investment risk to avoid loss</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Freeclass;

