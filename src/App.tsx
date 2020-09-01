import React from 'react';
import Header from "./Components/Header";
//import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import History from "./Components/History";
import AddTransaction from "./Components/AddTransaction";
import {GlobalProvider} from "./Context/Globalstate"
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className="deck">
      <Header/>
    <div className="container">
      <IncomeExpense/>
      <History/>
      <AddTransaction/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
