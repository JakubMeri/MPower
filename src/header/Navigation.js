import React, { useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo.js'
import SocialIcons from './socialIcons/SocialIcons.js'


export default function Navigation(props) {

    const [Menu, setMenu] = useState(false);

    const showMenu = () =>{
        let show = !Menu;
        setMenu(show)
    }

    const mobileMenu = <div className="mobile-menu">
    <Link onClick={() => {props.hideModule(); showMenu();}} className="nav-link-mobile" to="/MPower" >Hlavná stránka</Link>
    <Link onClick={() => {props.hideModule(); showMenu();}} className="nav-link-mobile" to="/Muzi" >Muži</Link>
    <Link onClick={() => {props.hideModule(); showMenu();}} className="nav-link-mobile" to="/Zeny" >Ženy</Link>
    <Link onClick={() => {props.hideModule(); showMenu();}} className="nav-link-mobile" to="/Doplnky" >Doplnky</Link>
    </div>;
    return (
        <React.Fragment>
            <header>
                <Logo />
                <SocialIcons />
                <nav>
                    <button className="kosik" onClick={props.show}><i className="fas fa-shopping-cart"></i> <span className="pocet-predmetov">{props.pocetPredmetov}</span></button>
                        <Link onClick={props.hideModule} className="nav-link" to="/MPower" >Hlavná stránka</Link>
                        <Link onClick={props.hideModule} className="nav-link" to="/Muzi" >Muži</Link>
                        <Link onClick={props.hideModule} className="nav-link" to="/Zeny" >Ženy</Link>
                        <Link onClick={props.hideModule} className="nav-link" to="/Doplnky" >Doplnky</Link>
                        <button className="mobile-menu-toggle" onClick={showMenu}>{Menu === false ?<i className="fas fa-bars"></i>:<i className="fas fa-times"></i>}</button>
                        {Menu === false ? null : mobileMenu}

                </nav>
            </header>
        </React.Fragment>
    )
}
