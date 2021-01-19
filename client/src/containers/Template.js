import React, { useState, useEffect } from 'react'
import neon from '../images/neon.png'
import trash from '../images/delete.png'
import { useLocation, Link } from 'react-router-dom'
// GraphQL dependencies
import { useQuery } from '@apollo/client'
import { GET_TEMPLATE } from '../graphql'

/*const Card = ({ txt }) => {
    return (
        <div className='card draftcard'>
            <img class='card-img-top' src={neon} alt='Card image cap'></img>
            <div className='card-body'>
                <h5 className='card-title'>{txt}</h5>

                <div className='flex-row yCen'>
                    <Link className='d-inline-block' to='/ee/new'>
                        Use this template
                    </Link>
                    <button className='trash m-1 yCen'>
                        <img className='d-inline-block trash' src={trash} />
                    </button>
                </div>
            </div>
        </div>
    )
}*/

const card = () => {
    return (
        <div
            className='card border-secondary mb-3'
            style={{ maxWidth: '18rem' }}
        >
            <div className='card-header' style={{ color: 'black' }}>
                Header
            </div>
            <div className='card-body text-secondary'>
                <h5 className='card-title'>Secondary card title</h5>
                <p className='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
            </div>
        </div>
    )
}

const createCards = (templates) => {
    let result = []
    for (let i = 0; i < templates.length; i++) {
        result.push(card())
    }
    return result
}

const Template = (props) => {
    //const location = useLocation()
    //const data = location.state

    const { loading, error, data } = useQuery(GET_TEMPLATE, {
        variables: {
            userId: props.userInfo.id,
        },
    })

    return (
        <div className='grid'>
            <button onClick={() => console.log(data.getTemplate)}>TEST</button>
            <div className='row'>
                <h2 className='dh'>Templates</h2>
            </div>
            <div className='row xCen yCen'>{card()}</div>
        </div>
    )
}

export default Template
