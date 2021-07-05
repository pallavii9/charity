const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'naikpallavi005@gmail.com', // your email address to send email from @pallavi add your own user address
    pass: 'nrahmwbowrnabhsj' // your gmail account password @pallavi add your own pass address
  }
});

module.exports = transporter;