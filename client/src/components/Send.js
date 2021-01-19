import React, { useEffect } from 'react'
import axios from 'axios'

import { rootPath } from '../config/pathConfig'

const Send = (props) => {
    const { userInfo, presend, getGridValue, subject } = props

    const sendMail = (to, subject, html) => {
        // e.preventDefault()
        axios
            .post(rootPath + 'sendMails', {
                userinfo: userInfo,
                subject: subject,
                to: to,
                html: html,
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                alert(err)
            })
    }

    const handleSend = (e) => {
        e.preventDefault()
        for (let i = 1; i < 11; i++) {
            if (getGridValue(i, 'Email_Address')) {
                sendMail(
                    getGridValue(i, 'Email_Address'),
                    subject,
                    presend[i - 1]
                )
            }
        }
    }

    useEffect(() => {
        console.log(userInfo)
        console.log(presend)
        console.log(subject)
    }, [])
    return (
        <div>
            <button onClick={handleSend}>Send</button>
        </div>
    )
}

export default Send
