import React,{useContext} from 'react';
import {GlobalContext} from"../Context/Globalstate"
import{transaction} from "../Context/Globalstate"
import {Transaction} from "../Components/Transaction"

function History() {
    const {transactions}= useContext(GlobalContext)
    
  return (
    <div>
        <h3>History</h3>
      <ul className="List">
     {transactions.map((transaction:transaction,id)=>
     (
         
<Transaction key={id} transaction={transaction}/>)
     
)}
         
      
      </ul>

    </div>
  );
}

export default History;
