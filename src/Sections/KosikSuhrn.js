import React from 'react'
import './SectionStyle.css'
import ShopItem from '../shoppingList/Shop/ShopItem'

export default function KosikSuhrn(props) {
    return (
        <div className="kosik-suhrn" onClick={props.hide}>
            <h1>Vybrané položky na zakúpenie:</h1>
            <ul className="buy-container">
                {props.items.map( (item, index) => {
                    return <ShopItem deleteItem={props.deleteItem} key={index} item={item}></ShopItem>
                })}
            </ul>
            <button className="zakupit">Zakúpiť</button>
        </div>
    )
}
