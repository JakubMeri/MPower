import React from 'react'
import './shoppingList.css'
import { Link } from 'react-router-dom'

export default function ShopingList(props) {
    return (
        props.show ? <div className="shop-list-container">
            <ul>
                {props.items.map( (item, index) => {
                    return <li key={index}><img src={item.img} alt="img"/> <p onClick={(e) => {props.moduleData(); props.getId(item.id); props.hide();}}>{item.name}</p> <button className="remove-btn" id={item.id} onClick={props.deleteItem}><i id={item.id} className="fas fa-times"></i></button></li>
                })}
            </ul>
            <Link onClick={props.hide} className="do-kosika" to="/NakupnýKošík">Kúpiť</Link>
        </div> : null
    )
}
