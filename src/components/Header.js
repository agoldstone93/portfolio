import React from "react";
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='logo'>Adam Goldstone</div>
            <ul className='menu'>
                <li><a href='#profile'>Profile</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#courses'>Certifications</a></li>
                <li><a href='https://github.com/agoldstone93' target="_blank" rel="noopener noreferrer">GitHub</a></li>
                {/* <li>Blog</li> */}
            </ul>
        </div>
    )
}
