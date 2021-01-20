import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import trash from '../images/delete.png'

const Card = () => {
    return (
        <div className='grid-col'>
            <div className='card flex-card border-secondary mb-3'>
                <div className='card-header' style={{ color: '#5e5e5e' }}>
                    Header
                </div>
                <div className='card-body text-secondary'>
                    <h5 className='card-title' style={{ color: '#2e2e2e' }}>
                        name
                    </h5>
                    <div className='flex-row'>
                        <p className='card-text flex'>des</p>
                        <button className='trash ml-auto'>
                            <img className='w-40' src={trash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Draft = () => {
    const location = useLocation()
    const data = location.state
    return (
        <>
            <div className='frameUp'>Draft</div>
            <div className='frameDown'>
                <div className='grid frameIn2'>
                    <div className='flex-row'>
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Draft
