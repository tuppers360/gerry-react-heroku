const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const router = express.Router();

urlEncoder = bodyParser.urlencoded({ extended: true });
jsonParser = bodyParser.json();

router.post("/api/nodemailer/contact", urlEncoder, (req, res) => {
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
  let mailOptionsClient = {
    from: "noreply@gerryrichardsontrust.org", // sender address
    to: data.body.email, // list of receivers
    subject: "Gerry Richardson Trust Contact Form", // Subject line
    text: `Thanks for being awesome!\r\n
      We have received your message and would like to thank you for writing to us.\r\n
      If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible.\r\n
      Talk to you soon, Gerry Richardson Trust\r\n
      Tel: 01253 590510\r\n
      Email: contactus@gerryrichardsontrust.org`, // plain text body
    html: `<strong>Thanks for being awesome!</strong>
      <p>We have received your message and would like to thank you for writing to us.</p>
      <p>If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible.</p>
      <p>Talk to you soon,</p>
      <p>Gerry Richardson Trust</p>
      <address>
      Northdene,<br>
      Stoney Lane,<br>
      Hambleton,<br>
      Poulton-Le-Fylde,<br>
      FY6 9AF
      </address>
      <p><strong>Tel:</strong> 01253 590510</p>
      <p><strong>Email:</strong> contactus@gerryrichardsontrust.org</p>` // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    //TODO - implement error message return and display it on site
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.sendStatus(200);
  });
  transporter.sendMail(mailOptionsClient, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.sendStatus(200);
  });
});

module.exports = router;
