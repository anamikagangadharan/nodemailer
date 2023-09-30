const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'octacoderfyi@gmail.com', // Replace this with your Email Id.
        pass: 'omvmfohxzbgmexrx' // Replace this with your Password.
    }
});

let mailOptions = {
    from: 'octacoderfyi@gmail.com', // Replace this with your Email Id.
    to: 'octacoderfyi@gmail.com', // Replace this with Recipient Email Id.
    subject: 'Testing Nodemailer',
    html: '<h1>Welcome to OctaCoder</h1> Please Subscribe OctaCoder Youtube Channel For Learning Web development! <br><a href="https://www.youtube.com/@octacoder">OctaCoder Youtube</a>'

};

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log('Error Occured' + error)
    }
    else {
        console.log('Successfully Email Sent To:' + mailOptions.to, info.response)
    }
})
