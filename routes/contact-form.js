const router = require('express').Router();
var nodemailer = require('nodemailer')

var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: 'user',
      pass: 'pass'
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

router.route('/').post((req, res) => {
    
      var name = req.body.name
      var email = req.body.email
      var subject = req.body.subject
      var message = req.body.message
      var content = `name: ${name} \n email: ${email} \n message: ${message} `
      subject = `Star Wars Holocron Contact Form: ${subject}` 
    
      var mail = {
        from: 'from',
        to: 'to',  //Change to email address that you want to receive messages on
        subject: subject,
        text: content
      }
    
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            msg: 'fail'
          })
        } else {
          res.json({
            msg: 'success'
          })
        }
      })
    })
    
module.exports = router