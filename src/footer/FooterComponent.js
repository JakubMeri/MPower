import React from 'react';
import './Footer.css';
import {Logo2} from '../Logo.js';

export default function Footer() {

    return (
        <footer>
            <div className="foot-component">
                <div className="cont"><span><i className="fas fa-phone"></i><p>Telefónne číslo:</p></span><p>+421 521 355</p> </div>
                <div className="cont"><span><i className="fas fa-envelope"></i><p>Email:</p></span><p>eshop@eshop.sk</p></div>
                <div className="cont"><span><i className="fas fa-map-marker-alt"></i><p>Adresa:</p></span> <p>Opiciakova 13</p></div>
            </div>
            <div className="foot-component">

            </div>
            <div className="foot-component">

            </div>
            <Logo2 />
        </footer>
    )
}
