import React from 'react'
import Filter from '../filter/Filter.js'
import Card from '../cards/Item'

export default function Doplnky(props) {

    const ziadneData = {
        position: "absolute",
        top: "40%",
        left: "50%",
        background: "#333333",
        color: "white",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Anton', sans-serif",
        textAlign: "center",
        padding: "10px",
        textShadow: "1px 1px 1px black",
        letterSpacing: "1px"
    }

    let awailable = "obrazok";
    let unawailable = "obrazok vypredane";

    const noItems = () => {
        let lowprice = [...props.info];
        lowprice.sort( (a, b) => a.cena - b.cena)
        if(lowprice[0].cena > props.priceFilterValue){
            return <h1 className="ziadneData">V danej cenovej hladine sme nenašli žiaden produkt.</h1>
        }  
    }

    const renderCards = props.info.map( data => {
        if(data.cena <= props.priceFilterValue){
        if(data.dostupne !== 0){
            return <Card getId={props.getId} module={props.module} class={awailable} key={data.id} data={data}/>}
        else{
            return <Card getId={props.getId} module={props.module} class={unawailable} key={data.id} data={data}/>}
        }
        else{
        return null;
    }
    });

    return (
        <div className="container" onClick={props.hide}>
            <h1 className="nadpis">Doplnky:</h1>
            <Filter zoradenie={props.zoradenie} priceFilterValue={props.priceFilterValue} priceFilter={props.priceFilter}/>
            {renderCards}
            {noItems()}
        </div>
    )
}
