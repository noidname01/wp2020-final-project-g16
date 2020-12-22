import React, { useState } from 'react'
import axios from 'axios'

const MailTester = (props) => {
    const Test_Config = {
        host: 'smtp.gmail.com',
        user: 'tim983649@gmail.com',
        pass: '4213abcd',
    }

    const Mail_Options = {
        from: Test_Config.user,
        to: Test_Config.user,
        subject: 'Test',
        html: '<b>Test mail</b>',
    }

    const sendMail = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/mailTest', {
                transporterConfig: Test_Config,
                mailOption: Mail_Options,
            })
            .then((data) => {
                console.log(data)
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <button onClick={sendMail}>Send Email</button>
        </div>
    )
}

export default MailTester
