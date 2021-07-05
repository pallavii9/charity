import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import IMAGES from "./components/Image";
import AboutBox from "./components/AboutBox";

import ContactForm from './components/ContactForm';
import FooterPg from "./components/FooterPg";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import HomeBanner from "./components/HomeBanner";

//import response from {express}
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    {/* <Header />  */}
    <Navbar />
    <HomeBanner />
  
   
    <div id="about">
      <AboutBox
        src={IMAGES.ABOUT}
        heading="About us"
        description="Being a Pakistani living abroad, I always wanted to find an organization where I 
could donate to the poorest people in the most remote areas of Pakistan.
I wanted to find the most struck individuals and families and help them on a 
monthly basis.
Zero Fee Charity (ZFC) is a non profit charity initiative established in 2019. Our 
purpose is to help the most needy people in the most remote areas of Pakistan.
My goal is simple - all funds will be donated to the donors with no cuts. 100% 
of all donations will be distributed and pictures and videos will be shared upon 
distribution.
This is my promise to you, InshAllah.
May Allah accept all of our efforts and JazakAllah for your support.
M
All funds will be donated to the donors with no cuts pls bold this statement."
      />
    </div>
    <div id="contact" class="contact-section">
      <ContactForm />
      <div class="contactImg">
      <img src="/assets/img/background.jpg" />
    </div>
    </div>
<br></br>
<div class="clearfix"></div>
    <div id="client" class="clientHeading">     
    <Content />
    </div>

   
    <br></br>
    <FooterPg />

  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
