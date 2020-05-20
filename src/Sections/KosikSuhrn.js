import React from 'react'
import './SectionStyle.css'

export default function KosikSuhrn(props) {
    return (
        <div className="kosik-suhrn" onClick={props.hide}>
            <ul>
                {props.items.map( (item, index) => {
                    return <li key={index}><img src={item.img}/> <p onClick={(e) => {props.moduleData(); props.getId(item.id); props.hide();}}>{item.name}</p> <button className="remove-btn" id={item.id} onClick={props.deleteItem}><i id={item.id} className="fas fa-times"></i></button></li>
                })}
            </ul>
        </div>
    )
}
