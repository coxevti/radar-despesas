import React from "react";

import GlobalStyle from "./styles/Global";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
    </GlobalProvider>
  );
}

export default App;
