import React from 'react'
import './SectionStyle.css'
import ShopItem from '../shoppingList/Shop/ShopItem'

export default function KosikSuhrn(props) {
    let vypocet = Object.values(props.items).reduce( (spolu , cena) => (spolu + Number(cena.cena)), 0);
    return (
        <div className="kosik-suhrn" onClick={props.hide}>
            <h1>Vybrané položky na zakúpenie:</h1>
            <div className="produkty">
            <ul className="buy-container">
                {props.items.length === 0 ? <h2>Prázdny košík</h2> : props.items.map( (item, index) => {
                    return <ShopItem deleteItem={props.deleteItem} key={index} item={item}></ShopItem>
                })}

            </ul>
            </div>
            <div className="cennik">
                <table className="cennik-tabulka">
                <thead>
                </thead>
                <tbody>
                <tr>
                        <td>Cena bez DPH:</td>
                        <td>{props.items.length === 0 ? "0€" : `${vypocet * 0.80}€`}</td>
                    </tr>
                    <tr><td>DPH 20%:</td><td>{`${vypocet * 0.2}€`}</td></tr>
                    <tr>
                        <td>Cena spolu:</td>
                        <td>{props.items.length === 0 ? "0€" : `${vypocet}€`}</td>
                    </tr>
                </tbody>
                </table>
                <button className="zakupit">Zakúpiť</button>
            </div>
        </div>
    )
}
