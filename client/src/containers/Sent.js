import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_SENT } from '../graphql'
import { useLocation } from 'react-router-dom'

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
