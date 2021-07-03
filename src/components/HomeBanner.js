import React from 'react';
import IMAGES from './Image';
import './HomeBanner.css';
//import house from '../house.jpg';



function HomeBanner(props) {
  const bgcontainer = {
    position: "relative",
  }
  const textbox = {
    position: "absolute",
  bottom: "4px",
  top: "0",
  right: "0%",
  left: "0",
  backgroundColor: "rgb(49 49 49 / 79%)",
  color: "white",
  width: "100%",
  margin: "0 auto",
  }
  const Bannerimg = {
    width: "100%",
    height: "500px",
  }

    return(
      <div className="App" style={bgcontainer}>
        <img style={Bannerimg} src={IMAGES.BANNER} alt='house'   />
        <div class="textblock" style={textbox}>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
       
      
        </div>
      </div> 
    );
  }
  export default HomeBanner;
