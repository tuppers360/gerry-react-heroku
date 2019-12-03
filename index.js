const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");
const router = require("./routes/routes.js");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(router);

app.use(cors());

app.get("/api/public-key", (req, res) => {
  const testKey = process.env.STRIPE_PUBLIC_KEY;
  res.send(testKey);

  console.log("TEST KEY RESPONSE", testKey);
  //console.log("RESPONSE", res);
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

app.post("/intents", urlEncoder, async (req, res) => {
  let data = req.body;
  console.log("DATA:", data);
  let options = {
    amount: data.amount,
    currency: "gbp",
    payment_method_types: ["card"]
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create(options);
    res.json(paymentIntent);
  } catch (err) {
    res.json(err);
  }
});
