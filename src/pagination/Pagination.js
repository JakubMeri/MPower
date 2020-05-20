import React from 'react'
import './pagination.css'

export default function Pagination({itemsPerPage, totalItems, paginate, currentPage}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <ul className="pagination-list">
           {pageNumbers.map( number => {
               if(pageNumbers.length < 2){

               }
               else{
                if(number === currentPage){
                    return <li key={number}><button className="active" onClick={ () => paginate(number)}>{number}</button></li>
                   }
                   else{
                    return <li key={number}><button onClick={ () => paginate(number)}>{number}</button></li>
                   }
               }
           })
           }
           </ul>
        </div>
    )
}
