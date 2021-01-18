import React from 'react'
import neon from '../images/neon.png'

const Card = () => {
    return (
        <div className='card draftcard'>
            <img class='card-img-top' src={neon} alt='Card image cap'></img>
            <div className='card-body'>
                <h5 className='card-title'>Template #</h5>
                <a href='#' className='card-link'>
                    Go somewhere
                </a>
            </div>
        </div>
    )
}

const Template = () => {
    return (
        <div className='grid'>
            <div className='row'>
                <div className='grid-col'>
                    <Card />
                </div>
                <div className='grid-col'>
                    <Card />
                </div>
                <div className='grid-col'>
                    <Card />
                </div>
                <div className='grid-col'>
                    <Card />
                </div>
            </div>
            <div className='row'>
                <div className='grid-col'>
                    <Card />
                </div>
                <div className='grid-col'>
                    <Card />
                </div>
                <div className='grid-col'>
                    <Card />
                </div>
                <div className='grid-col'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Template
