const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'octacoderfyi@gmail.com',
        pass: 'omvmfohxzbgmexrx'
    }
});

let mailOptions = {
    from: 'octacoderfyi@gmail.com',
    to: 'octacoderfyi@gmail.com',
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
