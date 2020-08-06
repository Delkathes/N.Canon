//? IMPORTS
//! Modules
import nodemailer from 'nodemailer'

//! Utils
const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'windows',
    path: '/usr/sbin/sendmail'
})

//! lambda : /api/mail
const handler = async function (req, res) {
    const body = JSON.parse(req.body)
    const { from, text } = body

    const mailOptions = {
        from,
        to: 'canon.nicolas@protonmail.com',
        subject: 'Contact form',
        text
    }

    res.setHeader('Content-Type', 'application/json')
    try {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
        res.status(200).json({ mail: 'success' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ mail: 'failed' })
    }
}
export default handler
