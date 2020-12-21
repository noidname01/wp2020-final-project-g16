import React from 'react';
export default function Menu({ open }) {
    return (
        <>
        {open ? 
        <div className="menu">
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>
        : <></>}
        </>
    )
}