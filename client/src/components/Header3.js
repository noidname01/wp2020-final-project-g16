import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import menu from '../images/menu.png'
import next from '../images/next.png'
import './Header.css'

export default function Header(props) {
    const getImage = () => {
        return (
            <img
                src={next}
                width='10'
                height='10'
                className='flex mx-1'
                alt=''
            />
        )
    }
    const createBtn = (title) => {
        return (
            <button
                type='button'
                className='header-button'
                key={title}
                onClick={() => {
                    props.setStep(title)
                }}
            >
                <span className='nav-link'>{title}</span>
            </button>
        )
    }

    return (
        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
            <label className='btn btn-secondary active'>
                <input
                    type='radio'
                    name='options'
                    id='option1'
                    autoComplete='off'
                    defaultChecked
                />
                Active
            </label>
            <label className='btn btn-secondary'>
                <input
                    type='radio'
                    name='options'
                    id='option2'
                    autoComplete='off'
                />
                Radio
            </label>
            <label className='btn btn-secondary'>
                <input
                    type='radio'
                    name='options'
                    id='option3'
                    autoComplete='off'
                />
                Radio
            </label>
        </div>
    )
}
//onClick={() => setMenuOpen(!menuOpen)}
