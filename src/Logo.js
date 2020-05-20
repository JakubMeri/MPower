import React from 'react'
import { Link } from 'react-router-dom'
import './header/Navigation.css'

export function Logo() {
    return (
        <div>
            <Link className="logo" to="/"><div>POWER</div>
            <span className="M">M</span></Link>
        </div>
    )
}
export function Logo2() {
    return (
        <div>
            <Link className="logo2" to="/"><div>POWER</div>
            <span className="M">M</span></Link>
        </div>
    )
}
