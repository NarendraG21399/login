var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'narendra21399@gmail.com',
    pass: 'narayan053767'
  }

});
 console.log('connected');


var mailOptions = {
  from: 'narendra21399@gmail.com',
  to: 'narayan75034@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

