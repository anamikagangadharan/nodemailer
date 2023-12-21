const fs = require('fs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anamikadevi.g@invicious.in',
        pass: 'nkosamgzeixqzjog'
    }
});

const mailOptions = {
    from: 'anamikadevi.g@invicious.in',
    to: 'anamikadevi.g@invicious.in',
    subject: 'Testing Nodemailer',
    html: '<h1>anamika_gangadharan</h1> hi this is anu. youtube channel refernce link <br><a href="https://www.youtube.com/@octacoder">OctaCoder Youtube</a> <br><img src="cid:my-image" alt="My Image" />',
    attachments: [
        {
            filename: 'image.png',
            path: 'C:\\Users\\anami\\Downloads\\image.png',
            cid: 'image.png' //same cid value as in the html img src
        }
    ]
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error sending email:', error);
    } else {
        console.log('Email sent:', info.messageId);
    }
});