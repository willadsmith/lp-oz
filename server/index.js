const path = require("path");
const express = require("express");
const cors = require("cors")
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser")
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, "../build", "index.html")));
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: "Connection on!" });
})

const contactEmail = nodemailer.createTransport({
    host: 'smtp.timeweb.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'help@bettercallzabalueva.ru',
        pass: 'E9nxD0s12'
    }
})

contactEmail.verify((err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Service is ready!');
    }
})

app.post("/api/contact", bodyParser.urlencoded({ extended: false }), (req, res) => {
    const name = req.body.firstName + req.body.LastName;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: 'vladimir.belonozhkin@gmail.com',
        subject: 'TEST',
        html: 'HELLO',
    }

    contactEmail.sendMail(mail, (err, info) => {
        if (err) {
            res.json({err})
        } else {
            res.json({ code: 200, status: 'success' })
        }
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build/index.html"));
})

app.listen(PORT, () => {
    console.log("Listen port " + PORT);
})