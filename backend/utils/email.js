import nodemailer from 'nodemailer'
import htmlToText from 'html-to-text'

class Email {
  constructor(user, url){
    this.to = user.email;
    this.firstName = user.name.split('')[0];
    this.url = url;
    this.from =`imagen<${process.env.EMAIL_FORM}>`
  }

  newTransport(){
    if(process.env.Node_ENV === 'production'){
      return 1;
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth:{
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }
  async send(template, subject){
    //React code ausführen
  }
  async sendWelcome(){
    await this.send('welcome', 'Welcome to Imagen')
  }
  async sendPasswordReset(){
    await this.send('passwordReset', 'Your password reset token (valid for only 10 minutes)')
  } 
};

export default Email