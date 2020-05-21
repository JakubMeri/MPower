import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
    return (
        <div className={props.class}>
            <img src={props.data.img} alt="Obrazok"/>
            <p>{props.data.name}</p>
            <p><b>{props.data.cena}€</b></p>
            <Link to="/details" className="btn-load-module" onClick={()=>{props.module(); props.getId(props.data.id);}}>Viac</Link>
        </div>
    )
}
