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
        to: 'b08901062@ntu.edu.tw',
        subject: '驚! 酪梨竟可以助孕?!!!捯捯捯捯捯',
        html:
            '<p>經研究指出，酪梨豐富的脂質含量有助於女性受孕<b>(小提醒:並不是幹酪梨喔)</b>，而最近很夯的南瓜也在好孕食物的行列裡面。 P.S.家翔好夯</p>',
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
