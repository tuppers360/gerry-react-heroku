const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const router = express.Router();

urlEncoder = bodyParser.urlencoded({ extended: true });
jsonParser = bodyParser.json();

router.post("/api/nodemailer/contact", urlEncoder, async (req, res) => {
  let data = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    name: process.env.NODEMAILER_NAME,
    host: process.env.NODEMAILER_SMTP_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PWD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // verify connection configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
      console.log("Server is ready to take our messages");
    }
  });

  let mailOptions = {
    from: data.body.email, // sender address
    to: process.env.NODEMAILER_CONTACT_EMAIL, // list of receivers
    subject: data.body.subject, // Subject line
    text: data.body.message, // plain text body
    html: data.body.message // html body
  };
  console.log("MAILOPTIONS:", mailOptions);
  // send mail with defined transport object
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.sendStatus(200);
  });
});

module.exports = router;
