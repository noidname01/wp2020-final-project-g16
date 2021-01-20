import React, { useState, useEffect } from 'react'
import neon from '../images/neon.png'
import trash from '../images/delete.png'
import { useLocation, Link } from 'react-router-dom'
// GraphQL dependencies
import { useQuery, useMutation } from '@apollo/client'
import { GET_TEMPLATE, LOOKUP_TEMPLATE } from '../graphql'

const card = (name, des, timestamp) => {
    return (
        <div
            className='card border-secondary mb-3'
            style={{ maxWidth: '18rem' }}
        >
            <div className='card-header' style={{ color: 'black' }}>
                {timestamp}
            </div>
            <div className='card-body text-secondary'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{des}</p>
            </div>
        </div>
    )
}

const Template = (props) => {
    /*const { loading, error, data } = useQuery(GET_TEMPLATE, {
        variables: {
            userId: props.userInfo.id,
        },
    })*/
    const [lookupTemplate] = useMutation(LOOKUP_TEMPLATE)
    /*
    useEffect(() => {
        console.log(data)
    }, [data])*/

    const [data, setData] = useState(null)

    const handleClick = async () => {
        const temp = await lookupTemplate({
            variables: {
                userId: props.userInfo.id,
            },
        })
        console.log(temp.data.lookupTemplate)
        setData(temp.data.lookupTemplate)
    }

    return (
        <div className='grid'>
            <button onClick={handleClick}>test</button>
            <div className='row'>
                <h2 className='dh'>Templates</h2>
            </div>
            <div className='row xCen yCen'>
                {!data ? (
                    <></>
                ) : (
                    data.map((ele) => {
                        //console.log(ele.name, ele.description)
                        return card(ele.name, ele.description, ele.timestamp)
                    })
                )}
            </div>
        </div>
    )
}

export default Template
