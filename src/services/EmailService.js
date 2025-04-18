const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config();

const sendEmailCreateOrder = async (email, orderItems) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_ACCOUNT, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
    });

    let listItem = '';
    const attachImage = []
    orderItems.forEach((order) => {
        listItem += `<div>
        <div>Bạn đã đặt sản phẩm <b>${order.name}</b> với số lượng: <b>${order.amount}</b> và giá là: <b>${order.price} VND</b></div>
        <div><img src=${order.image} alt='sản phẩm'/></div>
        </div>`
    })
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.MAIL_ACCOUNT, // sender address
      to: process.env.MAIL_ACCOUNT, // list of receivers
      subject: "Shop Ecommerce", // Subject line
      text: "Hello world?", // plain text body
      html: `<div><b>Bạn đã đặt hàng thành công tại shop</b></div>${listItem}`, // html body
      attachments: attachImage,
    });
  };

  module.exports = {
    sendEmailCreateOrder
  }