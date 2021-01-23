import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SENT } from '../graphql'
import { useLocation } from 'react-router-dom'
import timeStamp from './Timestamp'
import axios from 'axios'

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

    // const [lookupSent] = useMutation(LOOKUP_SENT)
    const { loading, data, error } = useQuery(GET_SENT, {
        variables: {
            userId: userInfo.id,
        },
    })

    // const [sentInfo, setSentInfo] = useState([])
    // const [content, setContent] = useState([])

    /* const renderCard = () => {
        setContent(
            data.getSent.map((info) => {
                let { timestamp, subject } = info
                return <Card timestamp={timestamp} subject={subject}></Card>
            })
        )
    } */

    /* useEffect(async () => {
        axios
            .post('/checkSent', {
                userId: props.userInfo.id,
            })
            .then((data) => {
                setSentInfo(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
        // const temp = await lookupSent({
        //     variables: {
        //         userId: userInfo.id,
        //     },
        // })
        // console.log(temp.data.lookupSent)
        // setSentInfo(temp.data.lookupSent)
    }, []) */

    /* useEffect(() => {
        if (sentInfo) {
            renderCard(sentInfo)
        }
    }, [sentInfo]) */

    return (
        <>
            {!loading ? (
                <>
                    <div className='frameUp'>Sent</div>
                    <div className='frameDown'>
                        <div className='grid frameIn2'>
                            <div className='flex-row'>
                                {data.getSent.map((info) => {
                                    let { timestamp, subject } = info
                                    return (
                                        <Card
                                            timestamp={timestamp}
                                            subject={subject}
                                        ></Card>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default Sent
