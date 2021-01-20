import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Card = ({ txt }) => {
    return (
        <div className='card draftcard'>
            <div className='card-body'>
                <h5 className='card-title'>Draft #</h5>
                <p className='card-text'>{txt}</p>
                <Link to='/ee/new'>Edit this draft</Link>
            </div>
        </div>
    )
}

const Draft = () => {
    const location = useLocation()
    const data = location.state
    return (
        <div className='grid'>
            <div className='row'>
                <h2 className='dh'>Drafts</h2>
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

export default Draft
