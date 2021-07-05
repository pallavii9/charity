import React from 'react';
import './AboutBox.css';

function AboutBox(props) {
    return(
        <div class="abt row">
        <div class="column aboutBox"  >       
            <img src={props.src} height={props.height} width={props.width}/>
        </div>
        <div class="column aboutContent">
          <h2>{props.heading}</h2>
            <p>{props.description} </p>
            
        </div>

        </div>
    );

}
export default AboutBox;