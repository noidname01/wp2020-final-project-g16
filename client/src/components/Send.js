import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Send.css'
import { rootPath } from '../config/pathConfig'
import timeStamp from '../containers/Timestamp'
import { useMutation } from '@apollo/client'
import { CREATE_SENT } from '../graphql'

import { v4 as uuid_v4 } from 'uuid'

const Send = (props) => {
    const { userInfo, presend, getGridValue, subject } = props

    const [sentCount, setSentCount] = useState(0)
    const [peopleCounter, setPeopleCounter] = useState(0)
    const [hasSent, setHasSent] = useState(false)

    const [createSent] = useMutation(CREATE_SENT)

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
                /* console.log(data.accepted[0])
                console.log(data.headers.date)
                console.log(subject) */
                createSent({
                    variables: {
                        id: uuid_v4(),
                        draftId: '',
                        userId: userInfo.id,
                        timestamp: timeStamp(),
                        subject: subject,
                    },
                })

                setSentCount(sentCount + 1)
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

                setPeopleCounter(peopleCounter + 1)
            }
        }

        setHasSent(true)
    }

    useEffect(() => {
        console.log(userInfo)
        console.log(presend)
        console.log(subject)
    }, [])
    return (
        <>
            {!hasSent ? (
                <button onClick={handleSend}>Send</button>
            ) : sentCount !== peopleCounter ? (
                <div className='animation-container container d-flex justify-content-center align-items-center'>
                    <div className='box'>
                        <div className='border one'></div>
                        <div className='border two'></div>
                        <div className='border three'></div>
                        <div className='border four'></div>

                        <div className='line one'></div>
                        <div className='line two'></div>
                        <div className='line three'></div>
                    </div>
                </div>
            ) : (
                <div>Complete</div>
            )}
        </>
    )
}

export default Send
