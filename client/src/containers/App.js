import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Body from '../components/Body'
import '../bootstrap.css'

// https://codepen.io/maximakymenko/pen/aboWJpX/

function App() {
    const menuIcon = React.useRef()
    const [menuOpen, setOpen] = React.useState(false)
    return (
        <div className='editor'>
            <Header menuOpen={menuOpen} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <Body />
        </div>
    )
}

export default App
