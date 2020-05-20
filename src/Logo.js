import React from 'react'
import { Link } from 'react-router-dom'
import './header/Navigation.css'

export function Logo() {
    return (
        <div>
            <Link className="logo" to="/MPower"><div>POWER</div>
            <span className="M">M</span></Link>
        </div>
    )
}
export function Logo2() {
    return (
        <div>
            <Link className="logo2" to="/MPower"><div>POWER</div>
            <span className="M">M</span></Link>
        </div>
    )
}
