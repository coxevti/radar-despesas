import React from "react";

import GlobalStyle from "./styles/Global";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
    </>
  );
}

export default App;
