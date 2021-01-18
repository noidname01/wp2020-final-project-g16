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
        <div className='container-fluid editor'>
            <div className='row'>
                <div className='d-inline-block'>
                    <Menu menuOpen={menuOpen} />
                </div>
                <div className='d-inline-block'>
                    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Routes />
                </div>
            </div>
        </div>
    )
}

export default App
