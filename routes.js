import express  from "express";
import dynamic from 'dynamic';
import path from "path";
import nodemailer from "nodemailer";
import session from "express-session";
import flash from "express-flash";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

const app = express();

const port = 6565;

dotenv.config({ path: '.env'});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge:600000
    }
}));

app.use(flash())
app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
    res.render('index',{messages: req.flash()})
});

// functionality to allow for email sending

app.post('/send_email', async (req, res) => {

    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    var phoneno = req.body.phonenumber;
    var receiver = process.env.USER;

    var transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        }
    });
    var mailOptions = {
        from: name,
        to: receiver,
        subject: subject,
        text: message + '\n\n\nFROM:' + name + '\nEMAIL:' + email + '\nPHONE NUMBER: ' + phoneno 
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error)
        }else{
            req.flash("success","You will receive an email confirming when to come in for your appointment")
            console.log("Email send: " + info.response)
        }
        res.redirect("/")
    })

});


app.use(express.static("public"));
app.listen(port, () => console.log(`listening on port ${port}`)); 