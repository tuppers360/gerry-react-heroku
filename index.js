const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const mg = {
  apiKey: process.env.MAIL_GUN_API,
  domain: process.env.MAIL_GUN_DOMAIN
};

const mailgun = require("mailgun-js")({ apiKey: mg.apiKey, domain: mg.domain });

const sendEmail = (to, from, subject, message) => {
  let data = {
    to,
    from,
    subject,
    text: message
  };
  console.log("FUNCTION:", data);
  return mailgun.messages().send(data);
};

app.post("/api/mailgun/contact", async (req, res, next) => {
  try {
    await sendEmail(
      "contactus@suptgerryrichardson.co.uk",
      req.body.values.email,
      req.body.values.subject,
      req.body.values.message
    );
    res.send("Email Sent!");
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

// THIS DOES NOT WORK!!!!!
app.post("/api/nodemailer/contact", async (req, res) => {
  console.log("THIS IS THE SERVER");
  console.log(req.body);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(
    smtpTransport({
      name: "www.suptgerryrichardson.co.uk",
      host: "smtp.ionos.co.uk",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "contactus@suptgerryrichardson.co.uk", // generated ethereal user
        pass: "Lq%7%383" // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    })
  );

  // verify connection configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
      console.log("Server is ready to take our messages");
    }
  });

  // send mail with defined transport object
  let info = await transporter
    .sendMail({
      from: "tuppers360@live.co.uk", // sender address
      to: "tuppers360@live.co.uk", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    })
    .then(
      response => {
        res.status(200).send(response);
      },
      error => {
        console.log(error);
      }
    );
});

app.get("/api/public-key", (req, res) => {
  res.send({ publicKey: process.env.STRIPE_PUBLIC_KEY });
});

app.get("/api", (req, res) => {
  const user = req.query.user || "tuppers360";
  axios.get(`https://api.github.com/users/${user}`).then(response => {
    res.json({ user: response.data });
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

app.post("/api/donate", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "GBP"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
