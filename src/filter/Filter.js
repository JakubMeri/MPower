import React from 'react'
import'./filter.css'

export default function Filter(props) {
    return (
        <div className="filter">
            <div className="range-container">
            <label htmlFor="">Cena do {props.priceFilterValue} €</label>
                <input type="range" min="0" max="100" className="rangeSlider" value={props.priceFilterValue} onChange={props.priceFilter}/>
            </div>
            <div className="price-filter">
            <div><label htmlFor="">Zoradiť podľa:</label></div>
                <select id="selection" onChange={props.zoradenie}>
                    <option value="normal">- - -</option>
                    <option value="asc">↓ Najnižšej ceny ↓</option>
                    <option value="desc">↑ Najvyžšej ceny ↑</option>
                </select>
            </div>
        </div>
    )
}
