import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Globalstate"
//import {transaction} from "../Context/Globalstate"

export default function IncomeExpense() {
  
  const {transactions}= useContext(GlobalContext)
  //const Totalamount=transactions.map((trans:transaction)=>trans.Amount)
//console.log(Totalamount)
/*const income= Totalamount
.filter((item:number)=> item> 0)
.reduce((acc:number,item:number) => (acc += item), 0)
.toFixed(2);*/
  const getincome=()=>{
 let income=0;
  for (var i=0;i<transactions.length; i++){
    if( transactions[i].Amount>0)
    income=(income+transactions[i].Amount)
  }
     return income
     
    }

 function getexpense(){
  let expense=0;
  for (var i=0;i<transactions.length; i++){
    if( transactions[i].Amount<0)
    expense =+transactions[i].Amount}
     return expense
    }

  return (
   <div> <h4> Balance </h4>
      <h1>${getincome()+(getexpense())} </h1>
    <div className="inc-exp-containe">
      <div>
      <h4> Income</h4>
      <p className="money plus"> ${getincome()}</p>
      </div>
      <div>
      <h4> Expense</h4>
      <p className="money minus"> ${Math.abs(getexpense())}</p>
      </div>
      </div>


    </div>
  );
}

;
