import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Card = () => {
    return (
        <div className='grid-col'>
            <div className='card flex-card border-secondary mb-3'>
                <div className='card-header' style={{ color: 'black' }}>
                    Header
                </div>
                <div className='card-body text-secondary'>
                    <h5 className='card-title'>name</h5>
                    <p className='card-text'>des</p>
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
