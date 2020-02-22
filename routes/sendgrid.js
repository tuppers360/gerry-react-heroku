const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

urlEncoder = bodyParser.urlencoded({ extended: true });
jsonParser = bodyParser.json();

router.post("/api/sendgrid/contact", urlEncoder, (req, res) => {
  let data = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  console.log("SEND GRID: Sending by Send Grid");
  console.log({ sgMail });
  try {
    const msg = {
      from: data.body.email, // sender address
      to: process.env.SENDGRID_CONTACT_EMAIL, // list of receivers
      subject: data.body.subject, // Subject line
      text: `FROM: ${data.body.name};
            Email: ${data.body.email};
            Message: ${data.body.address} ${data.body.postCode}`, // plain text body
      html: `<h3>From: ${data.body.name}</h3>
            <p>Email: ${data.body.email}</p>
            <p>Message: ${data.body.message}</p>` // html body
    };
    sgMail.send(msg);

    const msgClient = {
      from: "noreply@gerryrichardsontrust.org", // sender address
      to: data.body.email, // list of receivers
      subject: "Gerry Richardson Trust Contact Form", // Subject line
      text: `Thanks for being awesome!\r\n
      We have received your message and would like to thank you for writing to us.\r\n
      If your inquiry is urgent, please use the telephone number listed below. Otherwise, we will reply by email as soon as possible.\r\n
      Talk to you soon, Gerry Richardson Trustees\r\n
      Northdene,\r\n
      Stoney Lane,\r\n
      Hambleton,\r\n
      Poulton-Le-Fylde,\r\n
      FY6 9AF\r\n
      Tel: 01253 590510\r\n
      Email: contactus@gerryrichardsontrust.org`, // plain text body
      html: `<strong>Thanks for being awesome!</strong>
      <p>We have received your message and would like to thank you for writing to us.</p>
      <p>If your inquiry is urgent, please use the telephone number listed below. Otherwise, we will reply by email as soon as possible.</p>
      <p>Talk to you soon,</p>
      <p>Gerry Richardson Trustees</p>
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
    sgMail.send(msgClient);
    res.sendStatus(200);
  } catch (error) {
    //TODO - implement error message return and display it on site
    console.log(error);
  }

  console.log("SEND GRID: Message sent");
});

router.post("/api/sendgrid/application", urlEncoder, (req, res) => {
  let data = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  console.log("SEND GRID: Sending by Send Grid");
  console.log({ sgMail });
  try {
    const msg = {
      from: data.body.email, // sender address
      to: process.env.SENDGRID_APPLICATION_EMAIL, // list of receivers
      subject: data.body.subject, // Subject line
      text: `FROM: ${data.body.firstName} ${data.body.lastName}; 
            DOB: ${data.body.dateOfBirth}; 
            Email: ${data.body.email}; 
            Address: ${data.body.address} ${data.body.postCode}; 
            Application: ${data.body.application}`, // plain text body
      html: `<h3>Applicant: ${data.body.firstName} ${data.body.lastName}</h3> 
            <p>DOB: ${data.body.dateOfBirth}</p> 
            <p>Email: ${data.body.email}</p> 
            <p>Address: ${data.body.address} ${data.body.postCode}</p> 
            <p>Application: ${data.body.application}</p>` // html body
    };
    sgMail.send(msg);

    const msgClient = {
      from: "noreply@gerryrichardsontrust.org", // sender address
      to: data.body.email, // list of receivers
      subject: data.body.subject, // Subject line
      text: `Hi ${data.body.firstName}\r\n
        Thank you for your application!\r\n
        We have received your application and will consider it at our next meeting.\r\n
        We will contact you by email to let you know if you are successful or not.\r\n
        PLEASE BE AWARE as per the terms when applying - If further information becomes available to you regards to your application but prior to the Trustees’ quarterly meeting, eg receiving the result of an outstanding funding application or needing to change details on this application, you will need to contact us to let us know about this change.\r\n
        If we need any futher information we will contact you by email\r\n
        GOOD LUCK!\r\n
        Regards\r\n
        Gerry Richardson Trustees\r\n
        Northdene,\r\n
        Stoney Lane,\r\n
        Hambleton,\r\n
        Poulton-Le-Fylde,\r\n
        FY6 9AF\r\n
        Tel: 01253 590510\r\n
        Email: contactus@gerryrichardsontrust.org`, // plain text body
      html: `<p>Hi ${data.body.firstName}</p>
        <strong>Thank you for your application!</strong>
        <p>We have received your application and will consider it at our next meeting.</p>
        <p>We will contact you by email to let you know if you are successful or not.</p>
        <p><strong>PLEASE BE AWARE</strong> as per the terms when applying - If further information becomes available to you regards to your application but prior to the Trustees’ quarterly meeting, eg receiving the result of an outstanding funding application or needing to change details on this application, you will need to contact us to let us know about this change.</p>
        <p>If we need any futher information we will contact you by email</p>
        <p><strong>GOOD LUCK!</strong></p>
        <p>regards</p>
        <p>Gerry Richardson Trustees</p>
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
    sgMail.send(msgClient);
    res.sendStatus(200);
  } catch (error) {
    //TODO - implement error message return and display it on site
    console.log(error);
  }

  console.log("SEND GRID: Message sent");
});

// DONATION ROUTE
router.post("/api/sendgrid/donation", urlEncoder, (req, res) => {
  let data = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  console.log("SEND GRID: Sending by Send Grid");
  console.log(process.env.SENDGRID_DONATION_EMAIL);
  console.log({ sgMail });
  try {
    const msg = {
      from: data.body.email, // sender address
      to: process.env.SENDGRID_DONATION_EMAIL, // list of receivers
      subject: `Donation from: ${data.body.firstName} ${data.body.lastName}`, // Subject line
      text: `FROM: ${data.body.firstName} ${data.body.lastName}; 
            Email: ${data.body.email}; 
            Address: ${data.body.address};
            Town: ${data.body.town};
            Post Code: ${data.body.postCode}; 
            Gift Aid: ${data.body.giftAid};
            Donation: ${data.body.donation}`, // plain text body
      html: `<h3>Applicant: ${data.body.firstName} ${data.body.lastName}</h3> 
            <p>Email: ${data.body.email}</p> 
            <p>Address: <address>${data.body.address}<br/>${data.body.postCode}</address></p> 
            <p>Gift Aid: ${data.body.giftAid}</p>
            <p>Donation: ${data.body.donation}</p>` // html body
    };
    console.log({ msg });
    sgMail.send(msg);

    const msgClient = {
      from: "noreply@gerryrichardsontrust.org", // sender address
      to: data.body.email, // list of receivers
      subject: "Thank you for your donation", // Subject line
      text: `Hi ${data.body.firstName}\r\n
        Thank you for your donation to the Gerry Richardson Trust\r\n
        Thank you for supporting the Gerry Richardson Trust work with your generous donation. Your valuable gift will help in our aim to support young people accross the Fylde.\r\n
        We will contact you by email to let you know if you are successful or not.\r\n
        It means a lot to us and it means a great deal more to the people we help & support.\r\n
        If we need any futher information we will contact you by email\r\n
        Kind regards\r\n
        Gerry Richardson Trustees\r\n
        Northdene,\r\n
        Stoney Lane,\r\n
        Hambleton,\r\n
        Poulton-Le-Fylde,\r\n
        FY6 9AF\r\n
        Tel: 01253 590510\r\n
        Email: contactus@gerryrichardsontrust.org`, // plain text body
      html: `<p>Hi ${data.body.firstName}</p>
        <strong>Thank you for your donation to the Gerry Richardson Trust</strong>
        <p>Thank you for supporting the Gerry Richardson Trust work with your generous donation. Your valuable gift will help in our aim to support young people accross the Fylde.</p>
        <p>It means a lot to us and it means a great deal more to the people we help & support.</p>
        <p>Kind regards</p>
        <p>Gerry Richardson Trustees</p>
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
    sgMail.send(msgClient);
    res.sendStatus(200);
  } catch (error) {
    //TODO - implement error message return and display it on site
    console.log(error);
  }

  console.log("SEND GRID: Message sent");
});

module.exports = router;
