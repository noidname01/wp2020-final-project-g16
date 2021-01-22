import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOOKUP_SENT } from '../graphql'
import { useLocation } from 'react-router-dom'
import timeStamp from './Timestamp'

const Card = (props) => {
    const { timestamp, subject } = props
    return (
        <div className='grid-col'>
            <div className='card flex-card border-secondary mb-3'>
                <div className='card-header' style={{ color: '#5e5e5e' }}>
                    {timestamp}
                </div>
                <div className='card-body text-secondary'>
                    <h5 className='card-title' style={{ color: '#2e2e2e' }}>
                        {subject}
                    </h5>
                    <p className='card-text'>des</p>
                </div>
            </div>
        </div>
    )
}

const Sent = (props) => {
    const { userInfo } = props
    useLocation()

    const [lookupSent] = useMutation(LOOKUP_SENT)

    const [sentInfo, setSentInfo] = useState([])
    const [content, setContent] = useState([])

    const renderCard = (sentInfo) => {
        setContent(
            sentInfo.map((info) => {
                let { timestamp, subject } = info
                return <Card timestamp={timestamp} subject={subject}></Card>
            })
        )
    }

    useEffect(async () => {
        const temp = await lookupSent({
            variables: {
                userId: userInfo.id,
            },
        })
        console.log(temp.data.lookupSent)
        setSentInfo(temp.data.lookupSent)
    }, [])

    useEffect(() => {
        if (sentInfo) {
            renderCard(sentInfo)
        }
    }, [sentInfo])

    return (
        <>
            <div className='frameUp'>Sent</div>
            <div className='frameDown'>
                <div className='grid frameIn2'>
                    <div className='flex-row'>{content}</div>
                </div>
            </div>
        </>
    )
}

export default Sent
