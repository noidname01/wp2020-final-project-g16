import React, { useRef } from 'react';
export default function Header({ open, setOpen }) {
    return (
        <div className="navigation">
            <ul className="navigation-nav">
                <li className="navigation-menu"><img src="./img/menu.png" alt="" onClick={() => setOpen(!open)}/></li>
                <li className="navigation-title"><a href="#">A confession</a></li>
                <li className="navigation-button"><a href="#"><img src="./img/send.png" /></a></li>
                <li className="navigation-button"><a href="#"><img src="./img/save.png" /></a></li>
            </ul>
        </div>
    )
}