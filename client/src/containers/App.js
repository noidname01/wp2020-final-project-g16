import React, { useState, useRef } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Body from '../components/Body'
import '../bootstrap.css'
import '../sidebar.css'
import Routes from '../routes/Routes'

// https://codepen.io/maximakymenko/pen/aboWJpX/

function App() {
    const menuIcon = useRef()
    const [menuOpen, setMenuOpen] = useState(true)
    return (
        <div className='flex-container-main'>
            <div className='flex'>
                <Menu menuOpen={menuOpen} />
            </div>
            <div className='flex w100'>
                <div className='main w100'>
                    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <div className='editArea'>
                        <Routes />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
