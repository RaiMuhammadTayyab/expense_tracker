import React, {useContext} from 'react'
import {GlobalContext} from"../Context/Globalstate"
import {transaction} from "../Context/Globalstate";
type props={
    transaction:transaction
}

export function Transaction({transaction}:props) {
    const {deltransaction}=useContext(GlobalContext) 
    const sign = transaction.Amount<0 ?"-":"+";
    
return (
<>
<ul className="list">
<li className={transaction.Amount<0 ? "minus":"plus"}>
{transaction.Desc}
<span> {sign}$ {transaction.Amount} </span>
<button className="delete-btn" onClick={()=>deltransaction(transaction.id)}>x</button>
</li>

</ul>
   </>

)
}
