import React, { useState, useEffect } from 'react'
import neon from '../images/neon.png'
import trash from '../images/delete.png'
import { useLocation, Link } from 'react-router-dom'
// GraphQL dependencies
import { useQuery } from '@apollo/client'
import { GET_TEMPLATE } from '../graphql'

const card = (name, des) => {
    return (
        <div
            className='card border-secondary mb-3'
            style={{ maxWidth: '18rem' }}
        >
            <div className='card-header' style={{ color: 'black' }}>
                Header
            </div>
            <div className='card-body text-secondary'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{des}</p>
            </div>
        </div>
    )
}

const Template = (props) => {
    const { loading, error, data } = useQuery(GET_TEMPLATE, {
        variables: {
            userId: props.userInfo.id,
        },
    })

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='grid'>
            <button onClick={() => console.log('data: ', data.getTemplate)}>
                TEST
            </button>
            <div className='row'>
                <h2 className='dh'>Templates</h2>
            </div>
            <div className='row xCen yCen'>
                {loading ? (
                    <></>
                ) : (
                    data.getTemplate.map((ele) => {
                        console.log(ele.name, ele.description)
                        return card(ele.name, ele.description)
                    })
                )}
            </div>
        </div>
    )
}

export default Template
