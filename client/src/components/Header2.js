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
                        style={{
                            color: 'rgb(240,240,240)',
                        }}
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
                    disabled={false}
                >
                    <span className='nav-link'>{e.name}</span>
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
                        style={{ color: 'rgb(80,80,80)' }}
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
