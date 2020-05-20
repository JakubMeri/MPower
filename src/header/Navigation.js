import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo.js'
import SocialIcons from './socialIcons/SocialIcons.js'


export default function Navigation(props) {
    return (
        <React.Fragment>
            <header>
                <Logo />
                <SocialIcons />
                <nav>
                    <button className="kosik" onClick={props.show}><i className="fas fa-shopping-cart"></i> <span className="pocet-predmetov">{props.pocetPredmetov}</span></button>
                        <Link onClick={props.hideModule} className="nav-link" to="/" >Hlavná stránka</Link>
                        <Link onClick={props.hideModule} className="nav-link" to="/Muzi" >Muži</Link>
                        <Link onClick={props.hideModule} className="nav-link" to="/Zeny" >Ženy</Link>
                        <Link onClick={props.hideModule} className="nav-link" to="/Doplnky" >Doplnky</Link>
                </nav>
            </header>
        </React.Fragment>
    )
}
