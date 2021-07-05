import React from 'react';
import './FooterPg.css';

function FooterPg() {
    return(
<footer>
<div class="flex-container">

{/* <div class="flex-item" >
    <div class="ft-links">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
        </ul>    
        </div>
    </div> */}

<div class="flex-item" >
    <div class="ft-logo">
    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143093.266671525!2d60.32595964777702!3d30.0682967538591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2sin!4v1625233890257!5m2!1sen!2sin'  ></iframe>
    </div>
    </div>

    <div class="flex-item" >
    <div class="ft-desc">
        <h4>Donate</h4>
        <ul>
            <li>* Meezan Bank </li>
            <li>0211 0101362254</li>

            <li>* Etransfer- zerofeecharity@gmail.com</li>

            <li>Payment processor, mastercard, visa, interac, amex</li>
        </ul>
    </div>
    </div>

    
</div>
<h3>All Rights Reserved @2021</h3>
</footer>

);
}

export default FooterPg;