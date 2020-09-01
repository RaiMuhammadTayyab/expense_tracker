
import {transaction} from"../Context/Globalstate"
export default (state:any,action:any)=>{

    switch(action.type){
        case "Add_Trans":
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
              }
          case "Del_Trans":  
          return{
            ...state,
            transactions:state.transactions.filter((transaction:transaction)=> transaction.id!==action.payload)

          }    
            

default:
    return state;
    }
}
