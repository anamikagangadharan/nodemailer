const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anamikadevi.g@invicious.in',
        pass: 'nkosamgzeixqzjog'
    }
});

let mailOptions = {
    from: 'anamikadevi.g@invicious.in',
    to: ['anamikaanu2409@gmail.com', 'anamikadevi.g@invicious.in'],
    cc: 'anamikadevi.g@invicious.in',
    subject: 'Email With Attachments Testing',
    html: `<h1 style="color: Aqua">Welcome To OctaCoder</h1>
    <p>Please Subscribe OctaCoder Youtube Channel</p>
    <h4 style="color: red">"Learn The Way, Create Your Own Way"</h4>
    <a href="https://www.youtube.com/@octacoder">Subscribe OctaCoder</a>
    <img src="cid:image" alt="OctaCoder Image">`,
    attachments: [
        {
            filename: 'image.png',
            path: 'C:\\Users\\anami\\Downloads\\image.png', // Use an absolute URL
            cid: 'image'
        },
    ]
    

    // ]
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error Occurred:', error.message);
    } else {
        console.log("Email Sent Successfully to " + mailOptions.to);
    }
});
