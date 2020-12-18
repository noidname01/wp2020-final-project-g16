import React from 'react';
export default function Header() {
    return (
        <div className="navigation">
            <ul className="navigation-nav">
                <li className="navigation-menu"><a href="#"><img src="./img/menu.png"></img></a></li>
                <li className="navigation-title"><a href="#">A confession</a></li>
                <li className="navigation-button"><a href="#"><img src="./img/send.png"></img></a></li>
                <li className="navigation-button"><a href="#"><img src="./img/save.png"></img></a></li>
            </ul>
        </div>
        
    )
}