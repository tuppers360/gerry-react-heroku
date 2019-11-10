const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const router = express.Router();

urlEncoder = bodyParser.urlencoded({ extended: true });
jsonParser = bodyParser.json();

router.post("/api/nodemailer/contact", urlEncoder, async (req, res) => {
  console.log("THIS IS THE SERVER");
  console.log(req.body);
  let data = req.body;
  console.log(data);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    name: "www.suptgerryrichardson.co.uk",
    host: "smtp.ionos.co.uk",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "contactus@suptgerryrichardson.co.uk",
      pass: "Lq%7%383"
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

  console.log("CHECK:", data.body.email);

  let mailOptions = {
    from: data.body.email, // sender address
    to: "contactus@suptgerryrichardson.co.uk", // list of receivers
    subject: data.body.subject, // Subject line
    text: data.body.message, // plain text body
    html: data.body.message // html body
  };

  // send mail with defined transport object
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
