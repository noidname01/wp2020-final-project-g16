import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import menu from '../images/menu.png'
import next from '../images/next.png'
import './Header.css'

export default function Header(props) {
    const getImage = () => {
        return <div className='flex mx-1 next'>{'⟩'}</div>
    }
    const createBtn = (e) => {
        if (e.status === 'current') {
            return (
                <button
                    type='button'
                    className='header-button'
                    key={e.name}
                    onClick={() => {
                        props.setStep(e.name)
                    }}
                    disabled={true}
                >
                    <span
                        className='nav-link'
                        style={{ color: 'var(--light)' }}
                    >
                        {e.name}
                    </span>
                </button>
            )
        } else if (e.status === 'available') {
            return (
                <button
                    type='button'
                    className='header-button'
                    key={e.name}
                    onClick={() => {
                        props.setStep(e.name)
                    }}
                    style={{ color: 'var(--light)' }}
                    disabled={false}
                >
                    <span
                        className='nav-link'
                        style={{ color: 'var(--light)' }}
                    >
                        {e.name}
                    </span>
                </button>
            )
        } else if (e.status === 'unavailable') {
            return (
                <button
                    type='button'
                    className='header-button'
                    key={e.name}
                    onClick={() => {
                        props.setStep(e.name)
                    }}
                    disabled={true}
                >
                    <span
                        className='nav-link'
                        style={{ color: 'var(--light)', opacity: '0.6' }}
                    >
                        {e.name}
                    </span>
                </button>
            )
        }
    }

    return (
        <div className='navbar navbar-expand navbar-dark'>
            <div
                className='collapse navbar-collapse container-fluid'
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item flex-row'>
                        {props.titleList.map((e, id) => {
                            let result = []
                            if (id !== 0) {
                                result.push(getImage())
                            }
                            result.push(createBtn(e))
                            return result
                        })}
                    </li>
                </ul>
            </div>
        </div>
    )
}
//onClick={() => setMenuOpen(!menuOpen)}
