import React from 'react'
import axios from 'axios'

import { rootPath } from '../config/pathConfig'

const Send = (props) => {
    const { userInfo } = props

    const sendMail = (to, subject, html) => {
        e.preventDefault()
        axios.post(rootPath + 'sendMails', {
            userinfo: userInfo,
            subject: subject,
            to: to,
            html: html,
        })
    }

    const handleSend = (e) => {
        e.preventDefault()
        //TODO
    }
    return (
        <div>
            <button onClick={handleSend}></button>
        </div>
    )
}

export default Send
