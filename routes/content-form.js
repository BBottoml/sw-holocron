const router = require('express').Router();
var nodemailer = require('nodemailer')

var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: 'email',
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
    
      var handle = req.body.handle
      var email = req.body.email
      var message = req.body.message
      var content = `Twitter Handle: ${handle} \n email: ${email} \n message: ${message} `
      var subject = `Star Wars Holocron: Content Submission`
    
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