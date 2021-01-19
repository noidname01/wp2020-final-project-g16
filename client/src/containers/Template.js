import React from 'react'
import neon from '../images/neon.png'
import trash from '../images/delete.png'
import { useLocation, Link } from 'react-router-dom'

const Card = ({ txt }) => {
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
}

const Template = () => {
    const location = useLocation()
    const data = location.state
    return (
        <div className='grid'>
            <div className='row'>
                <h2 className='dh'>Templates</h2>
            </div>
            <div className='row xCen yCen'>
                <div className='grid-col'>
                    <Card txt={data} />
                </div>
                <div className='grid-col'>
                    <Card txt={data} />
                </div>
                <div className='grid-col'>
                    <Card txt={data} />
                </div>
                <div className='grid-col'>
                    <Card txt={data} />
                </div>
            </div>
            <div className='row xCen yCen'>
                <div className='grid-col'>
                    <Card txt={data} />
                </div>
                <div className='grid-col'>
                    <Card txt={data} />
                </div>
                <div className='grid-col'>
                    <Card txt={data} />
                </div>
                <div className='grid-col'>
                    <Card txt={data} />
                </div>
            </div>
        </div>
    )
}

export default Template
