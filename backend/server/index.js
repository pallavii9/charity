const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');


dotenv.config();
const app = express();


const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
  console.log('This is index page');
});


app.post('/send', (req, res) => {
  console.log(req.body);

  try {
    const mailOptions = {
      from: '', // sender address// @pallavi add your own email address
      to: req.body.email, // list of receivers
      subject: req.body.subject, // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
});

app.listen(3000, () => {
  console.log('server start on port 3030');
});