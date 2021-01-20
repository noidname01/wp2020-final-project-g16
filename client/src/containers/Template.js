import React, { useState, useEffect } from 'react'
import neon from '../images/neon.png'
import trash from '../images/delete.png'
import { useLocation, Link } from 'react-router-dom'
// GraphQL dependencies
import { useQuery } from '@apollo/client'
import { GET_TEMPLATE } from '../graphql'

const card = (name, des) => {
    return (
        <div className='grid-col'>
            <div className='card flex-card border-secondary mb-3'>
                <div className='card-header' style={{ color: 'black' }}>
                    Header
                </div>
                <div className='card-body text-secondary'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>{des}</p>
                </div>
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
        <>
            <div className='frameUp'>Template</div>
            <div className='frameDown'>
                <div className='grid frameIn2'>
                    <div className='flex-row'>
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
            </div>
        </>
    )
}

export default Template
