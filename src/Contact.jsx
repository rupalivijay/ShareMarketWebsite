import React, { useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: '',
  })

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile no is ${data.phone}. My mail id is ${data.email}, here is that I want to say ${data.message}`);
  };

  return (
    <>
      <section className=" p-2">
        <main className="  headline-title mb-auto">
          <br></br><br></br>
          <h5><span className="blok-on-freeclass">CLIENT SAY ABOUT VTA®</span></h5>
          <br></br> <br></br>
          <center><span className="blok-on-freeclass"><h3>We are in the business since 2010</h3></span></center>
          <br></br>
        </main>
      </section>
      <br></br> <br></br> <br></br> <br></br>

      <div className="my-5">
        <h1 className="text-center">SEND A MESSAGE TO ACADAMY</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>

              <div class="form-group mb-3">
                <label for="exampleInputName">Full Name</label>
                <input type="text" class="form-control" id="exampleInputName"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name" />
              </div>


              <div class="form-group mb-3">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="abc@gmail.com" />
              </div>

              <div class="form-group mb-3">
                <label for="mobno">Mobile No</label>
                <input type="text" class="form-control" id="mobno"
                  name="mobno"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="" />
              </div>
              <div class="form-group">
                <label for="exampleInputMess">Message</label>
                <textarea type="password" class="form-control"
                  id="exampleInputMess"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  placeholder="" />
              </div>

              <br></br>
              <div>
                <button type="submit" class="btn btn-outline-primary">Submit </button>
              </div>
            </form>



            <section class="section-contact">
              <div class="container">
                <div class="row justify-content-center row-eq-height">
                  <div class="col-md-10 mb-4">
                    <div class="contact-map aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <h2 class="mb-5"> Find us on Map</h2>
                      <div img = "{}"></div>

                    </div>
                  </div>

                  <div class="col-md-6 mb-4">

                    <h2 class="mb-4">Google Map 3D Office View</h2>
                    <div class="contact-map aos-init aos-animate" data-aos="fade-down" data-aos-delay="120">

                    </div>
                  </div>

                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;