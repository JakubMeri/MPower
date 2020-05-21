import React from 'react'
import "./module.css"

export default function Module(props) {





    const loadData = props.data.map( item =>{
            if(item.id === props.loadId)
            {
                return <React.Fragment key={props.loadId}>
                <div className="container-img-price">
                    <img src={item.img} alt="" className="image"/>
                    <span>
                        <p className="cena">Cena: {item.cena}€</p>
                        <button id={props.loadId} onClick={props.buyItemHandler} disabled={item.dostupne!==0 ? false : true} className={item.dostupne!==0 ? "buy-btn": "buy-btn disabled"}>{item.dostupne!==0 ? "Pridať do košíka": "VYPREDANÉ"}</button>
                    </span>
                </div>
                    <p className="nazov">{item.name}</p>
                    <p className="pozadie">{item.name}</p>
                <div className="popis">
                    <h1>POPIS PRODUKTU</h1>
                    <p>{item.popis}</p>
                </div>
                </React.Fragment>
            }
        });
    
    return (
        <div className="module-container" onClick={props.hide}>
            {loadData}
            <button className="hide-module-btn" onClick={props.hideModule}>
                <span></span><span></span><span></span><span></span>
                <i className="fas fa-times"></i>
            </button>
        </div>
    )
}