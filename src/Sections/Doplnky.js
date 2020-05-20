import React from 'react'
import Filter from '../filter/Filter.js'

export default function Doplnky(props) {
    return (
        <div className="container" onClick={props.hide}>
            <h1 className="nadpis">Doplnky:</h1>
            <Filter zoradenie={props.zoradenie} priceFilterValue={props.priceFilterValue} priceFilter={props.priceFilter}/>

        </div>
    )
}
