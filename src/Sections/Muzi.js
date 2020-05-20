import React, { useState } from 'react'
import Card from '../cards/Item.js'
import Filter from '../filter/Filter.js'
import Pagination from '../pagination/Pagination.js'


export default function Muzi(props) {
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

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = props.info.slice(indexOfFirstItem, indexOfLastItem);

    
    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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



    const noItems = () => {
        let lowprice = [...props.info];
        lowprice.sort( (a, b) => a.cena - b.cena)
        if(lowprice[0].cena > props.priceFilterValue){
            return <h1 style={ziadneData}>V danej cenovej hladine sme nenašli žiaden produkt.</h1>
        }  
    }


    return (
        <div className="container" onClick={props.hide}>
            <h1 className="nadpis">Mužská kolekcia:</h1>
            <Filter zoradenie={props.zoradenie}  priceFilterValue={props.priceFilterValue} priceFilter={props.priceFilter}/>
            {renderCards}
            {noItems()}
            <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={props.info.length} paginate={paginate}/>
        </div>
    )
}