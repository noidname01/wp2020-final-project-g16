const nodemailer = require('nodemailer')

module.exports = function (transporterConfig, mailOption) {
    let { host, user, pass } = transporterConfig
    let { receiver, subject, html } = mailOption
    this.transporter = nodemailer.createTransport({
        host: host,
        auth: {
            user: user,
            pass: pass,
        },
    })

    this.mailOption = {
        from: user,
        to: `<${receiver}>`,
        subject: subject,
        html: html,
    }

    this.sendMail = (res) => {
        this.transporter.sendMail(this.mailOption, (error, info) => {
            if (error) {
                // alert(error)
                console.log(error)
                res.status(404).send(error)
            } else {
                // alert('Emails have been sent!')
                console.log(info)
                res.status(200).send(info)
            }
        })
    }
}
