
import React,{createContext,useReducer,ReactNode} from "react"
import AppReducer from "./AppReducer"
 
const initTraction={
transactions:[
    {id:1,  Desc:"Books",  Amount:400},
    {id:2,  Desc: "Fruits", Amount:600},
    {id:3,  Desc:"Bike", Amount:700}],

id:"",
addTrans:(transaction:any)=>(transaction),
deltransaction:(id:any)=>(id)}

export type transaction={
    id:Number,
    Desc:String,
    Amount:Number,
}
type props={
    children:ReactNode,
}
export type state={
    transactions:transaction[],
    id:string,
    addTrans:(transaction:transaction)=>void,
    deltransaction:(id:number)=>void
    
}
export  const GlobalContext= createContext(initTraction)
export const GlobalProvider=({children}:props)=>{
    const[state,dispatch]=useReducer(AppReducer,initTraction)
    function deltransaction (id:number){
        dispatch({
        case:"Del_Trans",
        payload:id,
     })
    
    }
    function addTrans(transaction:transaction){
        dispatch({
            type:"Add_Trans",
            payload: transaction,
        })
    }
return (
    <GlobalContext.Provider value={{
        transactions:state.transactions,
         addTrans,
         id:state.id,
         deltransaction,
    }
    }>
        {children}
    </GlobalContext.Provider>
)


}

