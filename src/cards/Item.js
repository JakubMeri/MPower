import React from 'react'

export default function Item(props) {
    return (
        <div className={props.class}>
            <img src={props.data.img} alt="Obrazok"/>
            <p>{props.data.name}</p>
            <p><b>{props.data.cena}€</b></p>
            <button onClick={()=>{props.module(); props.getId(props.data.id);}}>Viac</button>
        </div>
    )
}
