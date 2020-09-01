import React,{useContext,useState} from 'react'
import { GlobalContext } from '../Context/Globalstate'


export default function AddTransaction() {
    const[Desc, setdesc]=useState('')
    const[Amount,setamount]=useState('')
    const {addTrans}= useContext(GlobalContext)
    const handle=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newtrans={
            id:Math.floor(Math.random()*100000000),
            //id:new Date().getTime(),
            Desc,
            Amount:+Amount
        }
            addTrans(newtrans)
           setamount('')
            setdesc('')
        }
console.log(addTrans)
    return (
        <>
         <h3>Add new Transaction</h3>
            <form onSubmit={handle}>
                <div className="form-control">
                <label htmlFor="desc">Description</label>
                <input type="text" id="desc" value={Desc} onChange={(e)=>setdesc(e.target.value)} required/>
                </div>
                <div className="form-control">
                <label htmlFor="amount"> Amount<br/>(negative=expense,positive=income)</label>
                <input type="number" id="amount"value={Amount} onChange={(e)=>setamount(e.target.value)} required/>
                </div>
                <button className="btn" >AddTransaction</button>
            </form>
            
        </>
    )
}
