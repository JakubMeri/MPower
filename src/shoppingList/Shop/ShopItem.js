import React from 'react'
import './shopitem.css'

export default function ShopItem(props) {
    return (
    <li className="buy-item"><img src={props.item.img} alt="img"/>
     <p>{props.item.name}</p>
     <span className="cena-produktu">Cena: {props.item.cena}€</span> 
     <button className="remove-btn-buy" id={props.item.id} onClick={props.deleteItem}><i id={props.item.id} className="fas fa-times"></i></button></li>
    )
}
